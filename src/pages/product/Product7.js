import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";

const Product7 = () => {
  const { t } = useTranslation(["products"]);
  return (
    <>
      <Navbar />
      <section id="prodetails" className="section-p1" style={{ paddingBottom: '10%' }}>
        <div className="single-pro--image">
          <img src={IMAGES.img7} className="single-pro--image" style={{ width: '50%', margin: ' 28%', borderRadius: '20px' }} />
        </div>
        <div className="single-pro--details">
          <h3>{t("p7h31")}</h3>
          <h4 className="h4--single">{t("p5h31")}</h4>
          <ul className="uls">
            <li>{t("p7ul1")}</li>
            <li>{t("p7ul2")}</li>
          </ul>
          <h4 className="h4--single">{t("p3h33")}</h4>
          <ul className="uls">
            <li>{t("p3ul4")}</li>
            <li>{t("p3ul5")}</li>
          </ul>
          <h4 className="h4--single">{t("p3h34")}</h4>
          <ul className="uls">
            <li>{t("p5ul3")}</li>
          </ul>
          <h4 className="h4--single">{t("p3h36")}</h4>
          <ul className="uls">
            <li>{t("p3ul6")}</li>
            <li>{t("p3ul7")}</li>
            <li>{t("p3ul8")}</li>
          </ul>
          <h4 className="h4--single">{t("p3h37")}</h4>
          <ul className="uls">
            <li>{t("p5h44")}</li>
            <li>{t("p7h3")}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Product7;
