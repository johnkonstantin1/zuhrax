import React from "react";
import "./Uses.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { SlChemistry } from "react-icons/sl";
import IMAGES from "../../assets";
import { Link } from "react-router-dom";
const Uses = () => {
  return (
    <>
      <Navbar />
      <section className="product1">
        <div className="pro-container">
          <div className="pro">
            <img src={IMAGES.uses} className="product-image" />
            <div className="des">
              
              <Link to="/uses1">
              <h5 className="h5-pr">Aversive bittering agent</h5>
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
            <img src={IMAGES.uses} className="product-image" />
            <div className="des">
              
              <Link to="/uses2">
              <h5 className="h5-pr">Denaturing agent</h5>
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
            <img src={IMAGES.uses} className="product-image" />
            <div className="des">
              
              <Link to="/product5">
              <h5 className="h5-pr">Solvent</h5>
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

export default Uses;
