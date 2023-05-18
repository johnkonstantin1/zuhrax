import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";

const Product4 = () => {
  const { t } = useTranslation(["products"]);
  return (
    <>
      <Navbar />
      <section id="prodetails" className="section-p1" style={{ paddingBottom: "10%" }}>
        <div className="single-pro--image">
          <img src={IMAGES.imgFour} className="single-pro--image" style={{ width: "70%", margin: " 18%", borderRadius: "20px" }} />
        </div>
        <div className="single-pro--details">
          <h3>{t("p4h3")}</h3>
          <h4 className="h4--single">{t("p4h33")}</h4>
          <ul className="uls">
            <li>{t("p4ul1")}</li>
            <li>{t("p4hueta")}</li>
          </ul>
          <h4 className="h4--single">
            <ul className="uls" style={{ paddingLeft: "20px" }}>
              <li>{t("p4ul1")}</li>
              <li>{t("p4ul2")}</li>
              <li>{t("p4ul3")}</li>
            </ul>
          </h4>
          <h4 className="h4--single" style={{ color: "red" }}>
            {t("p4que")}
          </h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product4;
