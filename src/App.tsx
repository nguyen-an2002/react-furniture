import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Shop from "./Shop/Shop";
import Checkout from "./Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>

      {!isLoginPage && (
        <Header toggleTheme={toggleTheme} theme={theme} />
      )}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>


      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
