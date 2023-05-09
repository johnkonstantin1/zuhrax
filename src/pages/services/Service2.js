import React from "react";
import "./Service.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Service2 = () => {
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
          <h2>Blending</h2>
          <p style={{ color: "white", paddingTop: '10px' }}>
          Some applications require to mix two or more components following very specific technical procedures and/or proportions.<br/>
          We perform such customised blending.<br/>
          The blends run from a few liters up to bulk volumes.<br/>
          </p>
          <h3 className="h4-single">Don’t hesitate to contact us.</h3>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service2;
