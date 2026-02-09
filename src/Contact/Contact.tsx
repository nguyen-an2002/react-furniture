import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Contact/Contact.css";
import bannerImg from "../assets/Contact/Rectangle 1.png";
import FeatureStrip from "../components/FeatureStrip";

const Contact = () => {
    const { t } = useTranslation("contact");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const GOOGLE_SHEET_URL =
        "https://script.google.com/macros/s/AKfycbypIUvrn7tKjUTJtcdLm5zw-TBaMHDNl-k5NJzYlVbd43cSOUYUfJJHZZ7hPsX8u77v/exec";

    const validate = () => {
        const emailRegex = /^[^\s@]+@(gmail\.com|[^\s@]+\.vn)$/;

        if (name.trim() === "") {
            return t("error.name");
        }

        if (email.trim() === "") {
            return t("error.emailEmpty");
        }

        if (email.includes(" ")) {
            return t("error.emailInvalid");
        }

        if (!emailRegex.test(email.trim())) {
            return t("error.emailFormat");
        }

        if (subject.trim() === "") {
            return t("error.subject");
        }

        if (message.trim() === "") {
            return t("error.message");
        }

        return "";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        const errorMessage = validate();
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        try {
            const formData = new FormData();
            formData.append("name", name.trim());
            formData.append("email", email.trim());
            formData.append("subject", subject.trim());
            formData.append("message", message.trim());

            const response = await fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                body: formData,
            });

            const text = await response.text();

            if (text === "success") {
                setSuccess(t("success"));
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            } else {
                setError(t("error.sendFail"));
            }
        } catch {
            setError(t("error.server"));
        }
    };

    return (
        <main className="contact">
            {/* HERO */}
            <section
                className="contact-hero"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <div className="contact-hero__content">
                    <h1>{t("heroTitle")}</h1>
                    <p>
                        {t("breadcrumbHome")} <span>&gt;</span> {t("breadcrumbContact")}
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <section className="contact-main">
                <div className="contact-main__header">
                    <h2>{t("title")}</h2>
                    <p>{t("subtitle")}</p>
                </div>

                <div className="contact-main__content">
                    {/* LEFT */}
                    <div className="contact-info">
                        <div className="contact-info__item">
                            <h4>{t("addressTitle")}</h4>
                            <p>{t("addressValue")}</p>
                        </div>

                        <div className="contact-info__item">
                            <h4>{t("phoneTitle")}</h4>
                            <p>{t("phoneValue")}</p>
                        </div>

                        <div className="contact-info__item">
                            <h4>{t("timeTitle")}</h4>
                            <p>{t("timeValue")}</p>
                        </div>
                    </div>

                    {/* FORM */}
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <label>
                            {t("form.name")}
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setError("");
                                }}
                                placeholder={t("form.placeholderName")}
                            />
                        </label>

                        <label>
                            {t("form.email")}
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                placeholder={t("form.placeholderEmail")}
                            />
                        </label>

                        <label>
                            {t("form.subject")}
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    setError("");
                                }}
                                placeholder={t("form.placeholderSubject")}
                            />
                        </label>

                        <label>
                            {t("form.message")}
                            <textarea
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    setError("");
                                }}
                                placeholder={t("form.placeholderMessage")}
                            />
                        </label>

                        <button type="submit" className="btn-primary">
                            {t("form.submit")}
                        </button>

                        {error && <p className="contact-error">{error}</p>}
                        {success && <p className="contact-success">{success}</p>}
                    </form>
                </div>
            </section>

            <FeatureStrip />
        </main>
    );
};

export default Contact;
