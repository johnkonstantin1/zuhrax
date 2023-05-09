import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";

const Product3 = () => {
  const { t } = useTranslation(["products"]);
  return (
    <div>
      <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.imgThree} className=".single-pro-image"  style={{ width: '70%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>{t("p3h31")}</h3>
          <h4 className="h4-single">{t("p3h32")}</h4>
          <ul className="uls"><li>{t("p3ul1")}</li><li>{t("p3ul2")}</li><li>{t("p3ul3")}</li></ul>
          <h4 className="h4-single">{t("p3h33")}</h4>
          <ul className="uls"><li>{t("p3ul4")}</li> <li>{t("p3ul5")}</li></ul>
          <h4 className="h4-single">{t("p3h34")}</h4>
          <ul className="h4-single">{t("p3h35")}</ul>
          <h4 className="h4-single">{t("p3h36")}</h4>
          <ul className="uls"><li>{t("p3ul6")}</li> <li>{t("p3ul7")}</li> <li>{t("p3ul8")}</li></ul>
          <h4 className="h4-single">{t("p3h37")}</h4>
          <ul className="h4-single">
            <li>{t("p3ul9")}</li>
            <li>{t("p3ul10")}</li>
            <li>{t("p3ul11")} </li>
          </ul>
          <h4 className="h4-single">{t("p3sol")}</h4>
          <span className="green"> {t("p3fas")}</span>
        </div>
      </section>
      <Footer />
    </>
    </div>
  )
}

export default Product3
