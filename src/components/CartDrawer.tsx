import "../styles/CartDrawer/CartDrawer.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { Link } from "react-router-dom";

type CartItem = {
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
};

type CartDrawerProps = {
    open: boolean;
    onClose: () => void;
};

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
    const { t } = useTranslation("cart");
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (open) {
            const data = localStorage.getItem("cart");
            const cart = data ? JSON.parse(data) : [];
            setCartItems(cart);
        }
    }, [open]);

    const increaseQty = (id: number) => {
        const newCart = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCartItems(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const decreaseQty = (id: number) => {
        const newCart = cartItems
            .map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0);

        setCartItems(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const subtotal = cartItems.reduce((total, item) => {
        const priceText = item.price;
        const priceNumber = Number(priceText.replace(/[^0-9]/g, ""));
        return total + priceNumber * item.quantity;
    }, 0);

    if (!open) return null;

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h3>{t("title")}</h3>
                    <button onClick={onClose}>{t("close")}</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 && (
                        <p>{t("empty")}</p>
                    )}

                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} />

                            <div className="cart-info">
                                <p>{item.name}</p>

                                <div className="cart-qty">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                </div>

                                <span className="cart-price">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="cart-footer">
                    <div className="subtotal">
                        <span>{t("subtotal")}</span>
                        <b>Rp {subtotal.toLocaleString()}</b>
                    </div>

                    <Link to="/checkout" onClick={onClose}>
                        <Button label={t("checkout")} />

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
