import React from "react";
import "./UsesStyles.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";
const Uses3 = () => {
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
          <h3>{t("u3h3")}</h3>
          <p style={{ color: "white", paddingTop: '10px' }}>
            <ul className="uls">
              <li>{t("u3ul1")}</li>
              <li>{t("u3ul2")}</li>
              <li>{t("u3ul3")}</li>
              <li>{t("u3ul4")}</li>
              <li>{t("u3ul5")}</li>
              <li>{t("u3ul6")}</li>
            </ul> 
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Uses3;
