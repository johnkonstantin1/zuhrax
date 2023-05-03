import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Product2 = () => {
  return (
    <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.imgTwo} className=".single-pro-image"  style={{ width: '70%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>Denatonium Benzoate SOLUTIONS</h3>
          <h4 className="h4-single"></h4>
          <h2 className="h2-single"></h2>
          <h2 className="h2-single"></h2>
          <h4 className="h4-single">Solutions:</h4>
          <ul className="h4-single"><li>Denatonium Benzoate in WATER solution</li> <li>Denatonium Benzoate in MEG solution</li> <li>Denatonium Benzoate in MPG solution</li><li>Denatonium Benzoate in Ethanol solution </li></ul>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product2;
