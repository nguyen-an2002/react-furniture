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
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const { t, i18n } = useTranslation("common");
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        setCurrentUser(user ? JSON.parse(user) : null);

    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === "vi" ? "en" : "vi";
        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setCurrentUser(null);
        setOpenUserMenu(false);
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

            <div
                className="hamburger"
                onClick={() => setOpenMobileMenu(prev => !prev)}
            >
                ☰
            </div>

            <nav className={`header__nav ${openMobileMenu ? "active" : ""}`}>
                <Link to="/" onClick={() => setOpenMobileMenu(false)}>
                    {t("nav.home")}
                </Link>
                <Link to="/shop" onClick={() => setOpenMobileMenu(false)}>
                    {t("nav.shop")}
                </Link>
                <Link to="/" onClick={() => setOpenMobileMenu(false)}>
                    {t("nav.about")}
                </Link>
                <Link to="/contact" onClick={() => setOpenMobileMenu(false)}>
                    {t("nav.contact")}
                </Link>
            </nav>
            <div className="header__icons">

                <div style={{ position: "relative" }}>
                    {currentUser ? (
                        <>
                            <span
                                onClick={() => setOpenUserMenu(prev => !prev)}
                                style={{ cursor: "pointer" }}
                                title="User"
                            >
                                👤
                            </span>

                            {openUserMenu && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "32px",
                                        right: 0,
                                        background: theme === "dark" ? "#222" : "#fff",
                                        color: theme === "dark" ? "#fff" : "#000",
                                        border: "1px solid #ddd",
                                        borderRadius: "6px",
                                        padding: "10px",
                                        minWidth: "160px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                        zIndex: 1000,
                                    }}
                                >
                                    <p style={{ margin: "0 0 8px", fontWeight: "bold" }}>
                                        {currentUser.name}
                                    </p>

                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            width: "100%",
                                            background: "none",
                                            border: "none",
                                            color: "red",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            padding: 0,
                                        }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <Link to="/login">👤</Link>
                    )}
                </div>

                <span>🔍</span>

                <div

                    onClick={() => {
                        if (!currentUser) {
                            navigate("/login");
                            return;
                        }

                        setOpenCart(true);
                    }}

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

                <span
                    onClick={toggleTheme}
                    style={{ cursor: "pointer", marginLeft: "12px" }}
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </span>

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
