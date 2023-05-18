import React from "react";
import "./Services.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { SlChemistry } from "react-icons/sl";
import IMAGES from "../../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation(["services"])
  return (
    <>
      <Navbar />
      <section className="product1">
        <div className="pro-container">
          <div className="pro">
            <img src={IMAGES.chem} className="product-image"/>
            <div className="des">
              
              <Link to="/service1">
              <h5 className="h5-pr">{t("titlehname")}</h5>
              </Link>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <a href="">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={IMAGES.chem} className="product-image" />
            <div className="des">
              
              <Link to="/services2">
              <h5 className="h5-pr">{t("titlehname2")}</h5>
              </Link>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <a href="">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={IMAGES.chem} className="product-image" />
            <div className="des">
              
              <Link to="/service3">
              <h5 className="h5-pr">{t("titlehname3")}</h5>
              </Link>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <a href="">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={IMAGES.chem} className="product-image" />
            <div className="des">
              
              <Link to="/service4">
              <h5 className="h5-pr">{t("titlehname4")}</h5>
              </Link>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <a href="">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
