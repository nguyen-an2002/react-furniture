import Button from "../components/Button";
import heroImg from "../assets/Home/HeroHome/slider.png";
import "../styles/Home/Home.css";
import { useTranslation } from "react-i18next";

const HeroHome = () => {
    const { t } = useTranslation("home");

    const handleBuyNow = () => {
        const productSection = document.getElementById("our-product");
        if (productSection) {
            productSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className="hero-home"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="hero-home__content">
                <span className="hero-home__tag">
                    {t("hero.tag")}
                </span>

                <h1>
                    {t("hero.title")}
                </h1>

                <p>
                    {t("hero.desc")}
                </p>

                <Button
                    label={t("hero.buyNow")}
                    onClick={handleBuyNow}
                />
            </div>
        </section>
    );
};

export default HeroHome;
