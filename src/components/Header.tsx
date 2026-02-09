import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CartDrawer from "./CartDrawer";
import logo from "../assets/logo/logo.png";
import "../styles/Header.css";
import vnFlag from "../assets/flags/vn.png";
import enFlag from "../assets/flags/en.png";

interface HeaderProps {
    toggleTheme: () => void;
    theme: "light" | "dark";
}

const Header = ({ toggleTheme, theme }: HeaderProps) => {
    const [openCart, setOpenCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const { t, i18n } = useTranslation("common");
    const navigate = useNavigate();


    const toggleLanguage = () => {
        const newLang = i18n.language === "vi" ? "en" : "vi";
        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };


    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    useEffect(() => {
        const checkCart = () => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");

            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].quantity;
            }

            setCartCount(total);
        };

        checkCart();
        const interval = setInterval(checkCart, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>

            <nav className="header__nav">
                <Link to="/">{t("nav.home")}</Link>
                <Link to="/shop">{t("nav.shop")}</Link>
                <Link to="/">{t("nav.about")}</Link>
                <Link to="/contact">{t("nav.contact")}</Link>
            </nav>

            <div className="header__icons">
                {/* 👤 Logout */}
                <span
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                    title="Logout"
                >
                    👤
                </span>

                <span>🔍</span>

                {/* Cart */}
                <div
                    onClick={() => setOpenCart(true)}
                    style={{ position: "relative", cursor: "pointer" }}
                >
                    🛒
                    {cartCount > 0 && (
                        <span
                            style={{
                                position: "absolute",
                                top: "-6px",
                                right: "-10px",
                                background: "red",
                                color: "white",
                                borderRadius: "50px",
                                padding: "2px 6px",
                                fontSize: "12px",
                                fontWeight: "bold",
                            }}
                        >
                            {cartCount}
                        </span>
                    )}
                </div>

                <CartDrawer
                    open={openCart}
                    onClose={() => setOpenCart(false)}
                />

                {/* Theme */}
                <span
                    onClick={toggleTheme}
                    style={{ cursor: "pointer", marginLeft: "12px" }}
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </span>

                {/* Language */}
                <img
                    src={i18n.language === "vi" ? vnFlag : enFlag}
                    alt="language"
                    onClick={toggleLanguage}
                    style={{
                        width: "24px",
                        height: "24px",
                        cursor: "pointer",
                        marginLeft: "12px",
                    }}
                />
            </div>
        </header>
    );
};

export default Header;
