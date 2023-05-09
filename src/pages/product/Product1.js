import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";
const Product1 = () => {
  const { t } = useTranslation(["products"]);
  return (
    <>
      <Navbar />
      <section
        id="prodetails"
        className="section-p1"
        style={{ paddingBottom: "10%" }}
      >
        <div className="single-pro-image">
          <img
            src={IMAGES.imgOne}
            className=".single-pro-image"
            style={{ width: "50%", margin: "0 28%", borderRadius: "20px" }}
          />
        </div>
        <div className="single-pro-details">
          <h3>{t("p1h3")}</h3>
          <h4>{t("p1h4")}</h4>
          <ul className="uls">
            <li>{t("p1ul1")}</li>
            <li>
            {t("p1ul2")}
            </li>
          </ul>
          <h4>{t("p1h4")}</h4>
          <ul className="uls">
            <li>{t("p1ul3")}</li> <li>{t("p1ul4")}</li>
          </ul>
          <h4 className="h4-single">{t("p1h42")}</h4>
          <ul className="uls">
            <li>{t("p1ul5")}</li> <li>{t("p1ul6")}</li>
          </ul>
          <h4 className="h4-single">{t("p1h43")}</h4>
          <ul className="uls">
            <li>{t("p1ul7")}</li> <li>{t("p1ul8")}</li> <li>{t("p1ul9")}</li>{" "}
            <li>{t("p1ul10")}</li>{" "}
          </ul>
          <h4 className="h4-single">{t("p1h44")}</h4>
          <ul className="uls">
            <li>{t("ul1")}</li>
            <li>
            {t("ul2")}
            </li>
            <li>
            {t("ul3")}
            </li>
            <li>{t("ul4")}</li>
          </ul>
          <h4 className="h4-single">
            {t("h41")}
          </h4>
          <span className="green">
            {t("span1")}
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product1;
