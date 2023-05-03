import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Product5 = () => {
  return (
    <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.img5} className=".single-pro-image"  style={{ width: '50%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>MEK DENATURANT (mixture)</h3>
          <h4 className="h4-single">Synonyms:</h4>
          <ul className="h4-single"><li>German MEK</li> <li>M62</li></ul>
          <h4 className="h4-single">Appearance:</h4>
          <ul className="h4-single"><li>colorless liquid</li></ul>
          <h4 className="h4-single">Packaging:</h4>
          <ul className="h4-single"><li>drums</li> <li>IBC's</li> <li>bulk</li></ul>
          <h4 className="h4-single">Main characteristics:</h4>
          <ul className="h4-single">
            <li>denaturing agent</li>
            <li>ketone mixture employed in procedure for complete denaturing of ethanol in EU Member Statess</li>
          </ul>
         
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product5;
