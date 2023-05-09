import React from "react";
import "./Service.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";
const Service4 = () => {
  const { t } = useTranslation(["services"])
  return (
    <>
      <Navbar />
      <section id="prodetails" className="section-p1" style={{paddingBottom: '20%'}}>
        <div className="single-pro-image">
          <img
            src={IMAGES.uses}
            className=".single-pro-image"
            style={{ width: "50%", margin: "0 28%", borderRadius: "20px" }}
          />
        </div>
        <div className="single-pro-details">
          <h2>{t("s4h2")}</h2>
          <p style={{ color: "white", paddingTop: '10px' }}>
          {t("s4p1")}
          </p>
          <h4 className="h4-single">{t("scont")}</h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service4;
