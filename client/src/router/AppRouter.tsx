import Footer from "@/components/Footer";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProductByCategory from "@/pages/ProductByCategory";
import ProductDetail from "@/pages/ProductDetail";
import Register from "@/pages/Register";
import ShopAll from "@/pages/ShopAll";
import { Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/product/:slug" element={<ProductByCategory />} />
        <Route path="/shop/:name" element={<ProductDetail />} />

        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
