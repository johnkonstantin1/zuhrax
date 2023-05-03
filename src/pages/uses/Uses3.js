import React from "react";
import "./UsesStyles.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Uses3 = () => {
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
          <h3>The following products can be used as SOLVENTS</h3>
          <span>
            Ethyle Acetate<br/> Isopropanol (industrial/cosmetic/pharma grade)<br/>
            Diethyl Phthalate<br/> Methyl Ethyl Ketone<br/> Isobutanol<br/> Diethyl Ether
          </span>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Uses3;
