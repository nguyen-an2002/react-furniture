import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

const Footer = () => {
    const { t } = useTranslation("common");

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = () => {
        setError("");
        setSuccess("");

        if (!email) {
            setError(t("message.emailRequired"));
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            setError(t("message.emailInvalid"));
            return;
        }

        setSuccess(t("message.subscribeSuccess"));
        setEmail("");
    };

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__col">
                    <h3 className="footer__logo">Furniro.</h3>
                    <p className="footer__text">
                        400 University Drive Suite 200 Coral Gables,
                        <br />
                        FL 33134 USA
                    </p>
                </div>

                <div className="footer__col">
                    <h4>{t("footer.links")}</h4>
                    <a href="#">{t("footer.home")}</a>
                    <a href="#">{t("footer.shop")}</a>
                    <a href="#">{t("footer.about")}</a>
                    <a href="#">{t("footer.contact")}</a>
                </div>

                <div className="footer__col">
                    <h4>{t("footer.help")}</h4>
                    <a href="#">{t("footer.payment")}</a>
                    <a href="#">{t("footer.returns")}</a>
                    <a href="#">{t("footer.privacy")}</a>
                </div>

                <div className="footer__col">
                    <h4>{t("footer.newsletter")}</h4>

                    <div className="footer__newsletter">
                        <input
                            type="email"
                            placeholder={t("footer.placeholder")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubmit}>
                            {t("footer.subscribe")}
                        </button>
                    </div>

                    {error && <p className="footer-error">{error}</p>}
                    {success && <p className="footer-success">{success}</p>}
                </div>
            </div>

            <div className="footer__bottom">
                <p>{t("footer.copyright")}</p>
            </div>
        </footer>
    );
};

export default Footer;
