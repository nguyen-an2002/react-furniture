import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./en/common.json";
import viCommon from "./vi/common.json";
import enHome from "./en/home.json";
import viHome from "./vi/home.json";
import enCart from "./en/cart.json";
import viCart from "./vi/cart.json";
import enCheckout from "./en/checkout.json";
import viCheckout from "./vi/checkout.json";
import enShop from "./en/shop.json";
import viShop from "./vi/shop.json";
import contactVI from "./vi/contact.json";
import contactEN from "./en/contact.json";
i18n.use(initReactI18next).init({
    resources: {
        en: {
            common: enCommon,
            home: enHome,
            cart: enCart,
            checkout: enCheckout,
            shop: enShop,
            contact: contactEN,
        },
        vi: {
            common: viCommon,
            home: viHome,
            cart: viCart,
            checkout: viCheckout,
            shop: viShop,
            contact: contactVI,
        },
    },
    lng: localStorage.getItem("lang") || "vi",
    fallbackLng: "vi",
    ns: ["common", "home", "cart", "checkout", "shop", "contact"],
    defaultNS: "common",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
