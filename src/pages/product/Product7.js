import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Product7 = () => {
  return (
    <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.img7} className=".single-pro-image"  style={{ width: '50%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>Diethyl Phthalate (DEP)</h3>
          <h4 className="h4-single">Synonyms:</h4>
          <ul className="h4-single"><li>DEP</li> <li>Ethyl phthalate</li><li>Diethyl ester of phthalic acid</li></ul>
          <h4 className="h4-single">References:</h4>
          <ul className="h4-single"><li>CAS n° 84-66-2</li> <li>EINECS n° 201-550-6</li></ul>
          <h4 className="h4-single">Appearance:</h4>
          <ul className="h4-single"><li>colourless, oily liquid</li></ul>
          <h4 className="h4-single">Packaging:</h4>
          <ul className="h4-single"><li>drums</li> <li>IBC's</li> <li>bulk</li></ul>
          <h4 className="h4-single">Main characteristics:</h4>
          <ul className="h4-single"><li>Denaturing agent, solvent</li> <li>Slight aromatic odour </li></ul>
          </div>
      </section>
      <Footer />
    </>
  );
};

export default Product7;
