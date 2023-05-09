import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";
const Product6 = () => {
  const { t } = useTranslation(["products"]);
  return (
    <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.img6} className=".single-pro-image"  style={{ width: '70%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>{t("p6h333")}</h3>
          <h4 className="h4-single">{t("p5h32")}</h4>
          <ul className="uls"><li>{t("p5ul3")}</li></ul>
          <h4 className="h4-single">{t("p5h33")}</h4>
          <ul className="uls"><li>{t("p3ul7")}</li> <li>{t("p3ul8")}</li></ul>
          <h4 className="h4-single">{t("p3h37")}</h4>
          <ul className="uls">
            <li>{t("p5h44")}</li>
            <li>{t("p6h1")}</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product6;
