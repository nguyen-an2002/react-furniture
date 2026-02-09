import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DescriptionButton = ({ product }: { product: any }) => {
    const navigate = useNavigate();
    const { t } = useTranslation("common");

    const handleGoDetail = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <button
            className="add-to-cart"
            onClick={handleGoDetail}
            style={{
                border: "1px solid #000",
                padding: "10px 20px",
                background: "#fff",
                cursor: "pointer",
            }}
        >
            {t("button.description")}
        </button>
    );
};

export default DescriptionButton;
