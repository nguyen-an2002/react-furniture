import "../styles/Checkout/Checkout.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FeatureStrip from "../components/FeatureStrip";
import heroImg from "../assets/Contact/Rectangle 1.png";

type CartItem = {
    id: number;
    name: string;
    desc: string;
    price: string;
    quantity: number;
};

const Checkout = () => {
    const { t } = useTranslation("checkout");

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const data = localStorage.getItem("cart");
        const cart = data ? JSON.parse(data) : [];
        setCartItems(cart);
    }, []);

    const total = cartItems.reduce((sum, item) => {
        const price = Number(item.price.replace(/[^0-9]/g, ""));
        return sum + price * item.quantity;
    }, 0);

    const validate = () => {
        if (cartItems.length === 0) {
            return t("message.emptyCart");
        }
        if (name.trim() === "") {
            return t("message.name");
        }
        if (address.trim() === "") {
            return t("message.address");
        }
        if (phone.trim() === "") {
            return t("message.phone");
        }
        if (email.trim() === "") {
            return t("message.email");
        }
        if (!email.includes("@gmail.com") && !email.endsWith(".vn")) {
            return t("message.emailInvalid");
        }
        return "";
    };

    const handleOrder = () => {
        setError("");
        setSuccess("");

        const errorMessage = validate();
        if (errorMessage !== "") {
            setError(errorMessage);
            return;
        }

        setSuccess(t("message.success"));

        localStorage.removeItem("cart");
        setCartItems([]);
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
    };

    return (
        <div className="checkout">
            {/* HERO */}
            <section
                className="checkout-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="checkout-hero__content">
                    <h1>{t("hero.title")}</h1>
                    <p>{t("hero.breadcrumb")}</p>
                </div>
            </section>

            <div className="checkout-content">
                {/* BILLING */}
                <div className="billing">
                    <h3>{t("billing.title")}</h3>

                    <input placeholder={t("billing.name")} value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder={t("billing.address")} value={address} onChange={(e) => setAddress(e.target.value)} />
                    <input placeholder={t("billing.phone")} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input placeholder={t("billing.email")} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* ORDER */}
                <div className="order">
                    <h3>{t("order.title")}</h3>

                    {cartItems.map((item) => (
                        <div className="order-item" key={item.id}>
                            <div>
                                <b>{item.name}</b>
                                <p>{item.desc}</p>
                            </div>
                            <span>
                                {item.quantity} × {item.price}
                            </span>
                        </div>
                    ))}

                    <div className="order-total">
                        <span>{t("order.total")}</span>
                        <b>Rp {total.toLocaleString()}</b>
                    </div>

                    <button onClick={handleOrder}>
                        {t("order.place")}
                    </button>

                    {error && <p className="contact-error">{error}</p>}
                    {success && <p className="contact-success">{success}</p>}
                </div>
            </div>

            <FeatureStrip />
        </div>
    );
};

export default Checkout;
