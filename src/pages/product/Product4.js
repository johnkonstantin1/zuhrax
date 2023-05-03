import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Product4 = () => {
  return (
    <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.imgFour} className=".single-pro-image"  style={{ width: '70%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>TBA SOLUTIONS</h3>
          <h4 className="h4-single">Synonyms:</h4>
          <h2 className="h2-single">lidocaine benzyl benzoate</h2>
          <h2 className="h2-single">benzyl diethyl [(2,6-xylylcarbamoyl)methyl] ammonium benzoate</h2>
          <h4 className="h4-single"><ul><li>TBA-DB solution</li><li>TBA-IPA solution</li><li>TBA-ETHANOL solution</li></ul></h4>
          
          <h4 className="h4-single" style={{color:'red'}}>Are you interested in more details about our products and delivery terms?</h4>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product4;
