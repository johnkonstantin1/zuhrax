import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Product3 = () => {
  return (
    <div>
      <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.imgThree} className=".single-pro-image"  style={{ width: '70%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>Tert-Butanol / TBA (substance)</h3>
          <h4 className="h4-single">Synonyms:</h4>
          <h2 className="h2-single"><ul><li>tert-butanol</li><li>tert-butyl alcohol</li><li>2-methyl-2-propanol</li></ul>></h2>
          
          <h4 className="h4-single">References:</h4>
          <ul className="h4-single"><li>CAS n° 75-65-0</li> <li>EINECS n° 200-889-7</li></ul>
          <h4 className="h4-single">Appearance:</h4>
          <ul className="h4-single">colourless liquid (white crystalline solid under 25 °C)</ul>
          <h4 className="h4-single">Packaging:</h4>
          <ul className="h4-single"><li>drums</li> <li>IBC's</li> <li>bulk</li></ul>
          <h4 className="h4-single">Main characteristics:</h4>
          <ul className="h4-single">
            <li>Denaturing agent, solvent, paint remover ingredient, intermediate for production of ETBE/MTBE</li>
            <li>Substance with a camphor-like odor</li>
            <li>TBA becomes solid at temperature under 25 °C and so difficult for handling </li>
          </ul>
          <h4 className="h4-single">Solutions:</h4>
          <span>To facilitate handling of the product, Denatech is in position to suplly TBA in differents types of solution.</span>
        </div>
      </section>
      <Footer />
    </>
    </div>
  )
}

export default Product3
