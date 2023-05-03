import React from "react";
import "./Service.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Service4 = () => {
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
          <h3>Quality control</h3>
          <span>
          <strong>SENTINALCO is certified ISO 9001 & 14001.</strong><br/>
          The company has always been quality-driven and this allows us to integrate and fulfill our customer's quality procedures.<br/>
          For each order, we provide you with a certificate of analysis. These analysis are performed by our in-house laboratory or in cooperation with external partners such as SGS or Intertek. <br/>
          We have established tracking procedures for all incoming and outgoing deliveries and we keep records for a period of two years.<br/> 
          </span>
          <h4 className="h4-single">Don’t hesitate to contact us.</h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service4;
