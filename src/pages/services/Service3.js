import React from "react";
import "./Service.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Service3 = () => {
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
          <h3>Technical advice</h3>
          <span>
          Throughout the years, we have developed a sound expertise on the market for aversive bittering and denaturing agents.<br/>
          Our offers always come along with technical advices and we are pleased to provide our customers with updated legal and technical information.<br/>
          Whenever needed or on request, we can perform tests or prepare samples in our own in-house laboratory.<br/>
          </span>
          <h4 className="h4-single">Don’t hesitate to contact us.</h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service3;
