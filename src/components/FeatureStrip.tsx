import "../styles/FeatureStrip.css";
import { useTranslation } from "react-i18next";

const FeatureStrip = () => {
    const { t } = useTranslation("common");

    return (
        <section className="feature-strip">
            <div className="feature-item">
                <h4>{t("feature.quality.title")}</h4>
                <p>{t("feature.quality.desc")}</p>
            </div>

            <div className="feature-item">
                <h4>{t("feature.warranty.title")}</h4>
                <p>{t("feature.warranty.desc")}</p>
            </div>

            <div className="feature-item">
                <h4>{t("feature.shipping.title")}</h4>
                <p>{t("feature.shipping.desc")}</p>
            </div>

            <div className="feature-item">
                <h4>{t("feature.support.title")}</h4>
                <p>{t("feature.support.desc")}</p>
            </div>
        </section>
    );
};

export default FeatureStrip;
