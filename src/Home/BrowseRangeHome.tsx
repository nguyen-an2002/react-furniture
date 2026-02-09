import "../styles/Home/Home.css";
import diningImg from "../assets/Home/BrowseRangeHome/Dining.png";
import livingImg from "../assets/Home/BrowseRangeHome/Living.png";
import bedroomImg from "../assets/Home/BrowseRangeHome/Bedroom.png";
import { useTranslation } from "react-i18next";

const BrowseRangeHome = () => {
    const { t } = useTranslation("home");

    return (
        <section className="browse-range">
            <h2>{t("browse.title")}</h2>
            <p>{t("browse.desc")}</p>

            <div className="browse-range__grid">
                <div className="range-card">
                    <img src={diningImg} alt={t("browse.dining")} />
                    <span>{t("browse.dining")}</span>
                </div>

                <div className="range-card">
                    <img src={livingImg} alt={t("browse.living")} />
                    <span>{t("browse.living")}</span>
                </div>

                <div className="range-card">
                    <img src={bedroomImg} alt={t("browse.bedroom")} />
                    <span>{t("browse.bedroom")}</span>
                </div>
            </div>
        </section>
    );
};

export default BrowseRangeHome;
