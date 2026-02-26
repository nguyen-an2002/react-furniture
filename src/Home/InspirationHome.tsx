import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

import img1 from "../assets/Home/InspirationHome/1.png";
import img2 from "../assets/Home/InspirationHome/2.png";
import img3 from "../assets/Home/InspirationHome/3.png";
import img4 from "../assets/Home/InspirationHome/4.png";

import "../styles/Home/Home.css";
const previewImages = [img1, img2, img3, img4];
const InspirationHome = () => {
    const { t } = useTranslation("home");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % previewImages.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="inspiration">
            <div className="inspiration__left">
                <h2>
                    {t("inspiration.title").split(" ").slice(0, 2).join(" ")} <br />
                    {t("inspiration.title").split(" ").slice(2).join(" ")}
                </h2>

                <p>
                    {t("inspiration.desc")}
                </p>

                <Button label={t("inspiration.explore")} />
            </div>

            <div className="inspiration__center">
                <img
                    src={img1}
                    alt={t("inspiration.mainAlt")}
                    className="inspiration__main-image"
                />

                <div className="inspiration__card">
                    <span>{t("inspiration.tag")}</span>
                    <h3>{t("inspiration.cardTitle")}</h3>
                    <div className="inspiration__arrow">→</div>
                </div>
            </div>

            <div className="inspiration__right">
                <div className="preview-slider">
                    <img
                        src={previewImages[currentIndex]}
                        alt={t("inspiration.previewAlt")}
                        className="preview-image"
                    />
                </div>

                <div className="inspiration__dots">
                    {previewImages.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InspirationHome;
