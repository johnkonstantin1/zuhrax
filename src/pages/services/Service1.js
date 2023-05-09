import React from "react";
import "./Service.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";
const Service1 = () => {
  const { t } = useTranslation(["services"])
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
            src={IMAGES.uses}
            className=".single-pro-image"
            style={{ width: "50%", margin: "0 28%", borderRadius: "20px" }}
          />
        </div>
        <div className="single-pro-details">
          <h3>{t("titlehname")}</h3>
          <span style={{ color: "white" }}>
          {t("s1span1")}
          </span>
          <h4 className="h4-single">
          {t("s1h4")}
          </h4>
          <span style={{ color: "white" }}>
            <ul className="uls">
              <li>{t("s1ul1")}</li>
              <li>{t("s1ul2")}</li>
              <li>{t("s1ul3")}</li>
              <li>{t("s1ul4")}</li>
              <li>{t("s1ul5")}</li>
            </ul>
          </span>
          <h4 className="h4-single">
          {t("s1he")}
          </h4>
          <span style={{ color: "white" }}>
            <ul className="uls">
              <li>{t("s1ul6")}</li>
              <li>{t("s1ul7")}</li>
              <li>{t("s1ul8")}</li>
              <li>{t("s1ul9")}</li>
              <li>{t("s1ul10")}</li>
              <li>{t("s1ul10")}</li>
            </ul>            
          </span>
          <h4 className="h4-single">{t("scont")}</h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service1;
