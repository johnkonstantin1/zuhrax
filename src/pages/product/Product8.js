import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";

const Product8 = () => {
  const { t } = useTranslation(["products"]);
  return (
    <>
      <Navbar />
      <section
        id="prodetails"
        className="section-p1"
        style={{ paddingBottom: "10%" }}
      >
        <div className="single-pro--image">
          <img
            src={IMAGES.img8}
            className="single-pro--image"
            style={{ width: "70%", margin: " 18%", borderRadius: "20px" }}
          />
        </div>
        <div className="single-pro--details">
          <h3>{t("p8h1")}</h3>
          <ul className="uls">
            <li>{t("p8ul1")}</li>
            <li>{t("p8ul2")}</li>
            <li>{t("p8ul3")}</li>
            <li>{t("p8ul4")}</li>
            <li>{t("p8ul5")}</li>
            <li>{t("p8ul6")}</li>
            <li>{t("p8ul7")}</li>
            <li>{t("p8ul8")}</li>
            <li>{t("p8ul9")}</li>
            <li>{t("p8ul10")}</li>
            <li>{t("p8ul11")}</li>
            <li>{t("p8ul12")}</li>
            <li>{t("p8ul13")}</li>
          </ul>
          <h4 className="h4--single">{t("p8h3333")}</h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product8;
