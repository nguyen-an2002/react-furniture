import "../styles/Shop/Shop.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DescriptionButton from "../components/DescriptionButton";
import FeatureStrip from "../components/FeatureStrip";
import AddtocartButton from "../components/AddtocartButton";
import heroImg from "../assets/Contact/Rectangle 1.png";
import { products } from "../constants/data";

const Shop = () => {
    const { t } = useTranslation("shop");

    const [limit, setLimit] = useState(16);
    const [page, setPage] = useState(1);
    const totalPage = Math.ceil(products.length / limit);

    const visibleProducts = products.slice(
        (page - 1) * limit,
        page * limit
    );

    const from = (page - 1) * limit + 1;
    const to = Math.min(page * limit, products.length);

    return (
        <main className="shop">
            {/* HERO */}
            <section
                className="shop-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="shop-hero__content">
                    <h1>{t("hero.title")}</h1>
                    <p>{t("hero.breadcrumb")}</p>
                </div>
            </section>

            {/* TOOLBAR */}
            <section className="shop-toolbar">
                <span>
                    {t("toolbar.showing", {
                        from,
                        to,
                        total: products.length,
                    })}
                </span>

                <div className="shop-toolbar__right">
                    <div className="shop-select">
                        <span>{t("toolbar.show")}</span>
                        <select
                            value={limit}
                            onChange={(e) => {
                                setLimit(Number(e.target.value));
                                setPage(1);
                            }}
                        >
                            <option value={16}>16</option>
                            <option value={32}>32</option>
                        </select>
                    </div>

                    <div className="shop-select">
                        <span>{t("toolbar.sort")}</span>
                        <select>
                            <option>{t("toolbar.default")}</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* PRODUCT GRID */}
            <section className="shop-grid">
                {visibleProducts.map((item) => (
                    <div className="product-card" key={item.id}>
                        <div className="product-card__image">
                            <img src={item.image} alt={item.name} />

                            <div className="product-overlay">
                                <AddtocartButton product={item} />
                                <DescriptionButton product={item} />
                            </div>
                        </div>

                        <div className="product-card__info">
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <span className="price">{item.price}</span>
                        </div>
                    </div>
                ))}
            </section>

            {/* PAGINATION */}
            <div className="pagination">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    {t("pagination.prev")}
                </button>

                <span>
                    {t("pagination.page", {
                        current: page,
                        total: totalPage,
                    })}
                </span>

                <button
                    disabled={page === totalPage}
                    onClick={() => setPage(page + 1)}
                >
                    {t("pagination.next")}
                </button>
            </div>

            <FeatureStrip />
        </main>
    );
};

export default Shop;
