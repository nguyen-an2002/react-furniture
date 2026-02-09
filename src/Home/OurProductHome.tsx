import "../styles/Home/Home.css";
import ShowMoreButton from "../components/ShowMoreButton";
import AddtocartButton from "../components/AddtocartButton";
import DescriptionButton from "../components/DescriptionButton";
import { useTranslation } from "react-i18next";

import img1 from "../assets/Home/OurProductHome/image1.png";
import img2 from "../assets/Home/OurProductHome/image2.png";
import img3 from "../assets/Home/OurProductHome/image3.png";
import img4 from "../assets/Home/OurProductHome/image4.png";
import img5 from "../assets/Home/OurProductHome/image5.png";
import img6 from "../assets/Home/OurProductHome/image6.png";
import img7 from "../assets/Home/OurProductHome/image7.png";
import img8 from "../assets/Home/OurProductHome/image8.png";

const products = [
    { id: 1, name: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", image: img1 },
    { id: 2, name: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", image: img2 },
    { id: 3, name: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", image: img3 },
    { id: 4, name: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.000", image: img4 },
    { id: 5, name: "Grifo", desc: "Night lamp", price: "Rp 1.500.000", image: img5 },
    { id: 6, name: "Muggo", desc: "Small mug", price: "Rp 150.000", image: img6 },
    { id: 7, name: "Pingky", desc: "Cute bed set", price: "Rp 7.000.000", image: img7 },
    { id: 8, name: "Potty", desc: "Minimalist flower pot", price: "Rp 500.000", image: img8 },
];

const OurProductHome = () => {
    const { t } = useTranslation("home");

    return (
        <section className="our-product" id="our-product">
            <h2 className="our-product__title">
                {t("product.title")}
            </h2>

            <div className="our-product__grid">
                {products.map((item) => (
                    <div className="product-card" key={item.id}>
                        <div className="product-card__image">
                            <img src={item.image} alt={item.name} />

                            <div className="product-overlay">
                                <AddtocartButton product={item} />
                                <DescriptionButton product={item} />
                            </div>
                        </div>

                        <div className="product-card__info">
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <div className="price">
                                <span className="current">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="our-product__action">
                <ShowMoreButton />
            </div>
        </section>
    );
};

export default OurProductHome;
