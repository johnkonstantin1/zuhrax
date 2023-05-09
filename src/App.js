import React from "react";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./pages/products/Products";
import Product1 from "./pages/product/Product1";
import Product2 from "./pages/product/Product2";
import Product3 from "./pages/product/Product3";
import Product4 from "./pages/product/Product4";
import Product5 from "./pages/product/Product5";
import Product6 from "./pages/product/Product6";
import Product7 from "./pages/product/Product7";
import Product8 from "./pages/product/Product8";
import Uses from "./pages/uses/Uses";
import Uses1 from "./pages/uses/Uses1";
import Uses2 from "./pages/uses/Uses2";
import Uses3 from "./pages/uses/Uses3";
import Services from "./pages/services/Services";
import Service1 from "./pages/services/Service1";
import Service2 from "./pages/services/Service2";
import Service3 from "./pages/services/Service3";
import Service4 from "./pages/services/Service4";

// function App() {
//   return (
//     <>
//       <NavBar />
//       <Hero />
//       <Footer />
//     </>
//   );
// }

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/product4" element={<Product4 />} />
          <Route path="/product5" element={<Product5 />} />
          <Route path="/product6" element={<Product6 />} />
          <Route path="/product7" element={<Product7 />} />
          <Route path="/product8" element={<Product8 />} />
          <Route path="/uses" element={<Uses />} />
          <Route path="/uses1" element={<Uses1 />} />
          <Route path="/uses2" element={<Uses2 />} />
          <Route path="/uses3" element={<Uses3 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service1" element={<Service1 />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service3" element={<Service3 />} />
          <Route path="/service4" element={<Service4 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
