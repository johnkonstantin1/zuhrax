import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";
import { useTranslation } from "react-i18next";
const Product2 = () => {
  const { t } = useTranslation(["products"]);
  return (
    <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.imgTwo} className=".single-pro-image"  style={{ width: '70%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>{t("p2h3")}</h3>
          <h4 className="h4-single"></h4>
          <h2 className="h2-single"></h2>
          <h2 className="h2-single"></h2>
          <h4 className="h4-single">{t("p2h33")}</h4>
          <ul className="h4-single"><li>{t("p2ul1")}</li> <li>{t("p2ul2")}</li> <li>{t("p2ul3")}</li><li>{t("p2ul4")}</li></ul>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product2;
