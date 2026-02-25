import { useParams } from "react-router-dom";
import { products } from "../constants/data";
import AddtocartButton from "../components/AddtocartButton";
import "../styles/ProductDetail.css";
import FeatureStrip from "../components/FeatureStrip";

import heroImg from "../assets/Contact/Rectangle 1.png";
const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h2 style={{ padding: 40, color: "red" }}>Product not found</h2>;
    }

    return (
        <main className="productdetail">
            <section
                className="shop-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="shop-hero__content">
                    <h1>Shop</h1>
                    <p>Home &gt; Shop</p>
                </div>
            </section>
            <div className="product-detail">
                <div
                    className="product-detail__image"
                    style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="product-detail__info">
                    <h1>{product.name}</h1>
                    <p className="price">{product.price}</p>
                    <div className="rating">
                        ⭐⭐⭐⭐⭐ <span>5 Customer Review</span>
                    </div>
                    <p className="desc">{product.desc}</p>
                    <div className="actions">
                        <AddtocartButton product={product} />
                    </div>
                </div>

            </div>
            <FeatureStrip />

        </main>
    );
};

export default ProductDetail;
