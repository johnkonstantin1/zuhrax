import React from "react";
import "./Products.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { SlChemistry } from "react-icons/sl";
import IMAGES from "../../assets";
import { Link } from "react-router-dom";
import {useTranslation } from "react-i18next"
const Products = () => {
  const { t } = useTranslation(["products"])
  return (
    
    <>
      <Navbar />
      <section className="product1">
        <div className="pro-container">
          <div className="pro">
            <img src={IMAGES.imgOne} className="product-image" />
            <div className="des">
              <span>{t("descr")}</span>
              <Link to="/product1">
                <h5 className="h5-pr">{t("nametitleh")}</h5>
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
            <img src={IMAGES.imgTwo} className="product-image" />
            <div className="des">
              <span>{t("descr")}</span>
              <Link to="/product2">
              <h5 className="h5-pr">{t("nametitleh2")}</h5>
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
            <img src={IMAGES.imgThree} className="product-image" />
            <div className="des">
              <span>{t("descr")}</span>
              <Link to="/product3">
              <h5 className="h5-pr">{t("nametitleh3")}</h5>
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
            <img src={IMAGES.imgFour} className="product-image" />
            <div className="des">
              <span>{t("descr")}</span>
              <Link to="/product4">
              <h5 className="h5-pr">{t("nametitleh4")}</h5>
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
            <img src={IMAGES.img5} className="product-image" />
            <div className="des">
              <span>{t("descr")}</span>
              <Link to="/product5">
              <h5 className="h5-pr">{t("nametitleh5")}</h5>
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
            <img src={IMAGES.img6} className="product-image" />
            <div className="des">
              <span>{t("descr")}</span>
              <Link to="/product6">
              <h5 className="h5-pr">{t("nametitleh6")}</h5>
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
            <img src={IMAGES.img7} className="product-image" />
            <div className="des">
              <span>{t("descr")}</span>
              <Link to="/product7">
              <h5 className="h5-pr">{t("nametitleh7")}</h5>
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
            <img src={IMAGES.img8} className="product-image" />
            <div className="des">
              <span>{t("descr")}</span>
              <Link to="/product8">
              <h5 className="h5-pr">{t("name8")}</h5>
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
      <Footer />
    </>
  );
};

export default Products;
