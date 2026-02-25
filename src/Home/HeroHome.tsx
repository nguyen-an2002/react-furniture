import Button from "../components/Button";
import heroImg from "../assets/Home/HeroHome/slider.png";
import "../styles/Home/Home.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
const HeroHome = () => {
    const { t } = useTranslation("home");

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

                <Link
                    to="our-product"
                    smooth={true}
                    duration={500}
                >
                    <Button label={t("hero.buyNow")} />
                </Link>
            </div>
        </section>
    );
};

export default HeroHome;
