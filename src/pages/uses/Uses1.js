import React from "react";
import "./UsesStyles.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";
const Uses1 = () => {
  const { t } = useTranslation(["uses"])
  return (
    <>
      <Navbar />
      <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img
            src={IMAGES.uses}
            className=".single-pro-image"
            style={{ width: "50%", margin: "0 28%", borderRadius: "20px" }}
          />
        </div>
        <div className="single-pro-details">
          <h2>{t("u1h2")}</h2>
          <p style={{ color: "white", paddingTop: '10px' }}>
            {t("u1p1")}
          </p>
          <h2 className="h4-single">{t("u1s1")}</h2>
          <p style={{ color: "white", paddingTop: '10px' }}>
          {t("u1p2")}
          </p>

          <h4 className="h4-single">
          {t("u1cont")}
          </h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Uses1;
