import { useTranslation } from "react-i18next";


const AddToCartButton = ({ product }: { product: any }) => {
    const { t } = useTranslation("common");

    const handleAddToCart = () => {

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingProduct = cart.find(
            (item: any) => item.id === product.id
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    return (
        <button
            className="add-to-cart"
            onClick={handleAddToCart}
            style={{
                border: "1px solid #000",
                padding: "10px 20px",
                background: "#fff",
                cursor: "pointer",
            }}
        >
            {t("button.addToCart")}
        </button>
    );
};

export default AddToCartButton;
