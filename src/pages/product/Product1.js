import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Product1 = () => {
  return (
    <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.imgOne} className=".single-pro-image"  style={{ width: '50%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>DENATONIUM BENZOATE (substance)</h3>
          <h4 className="h4-single">Synonyms:</h4>
          <h2 className="h2-single">lidocaine benzyl benzoate</h2>
          <h2 className="h2-single">benzyl diethyl [(2,6-xylylcarbamoyl)methyl] ammonium benzoate</h2>
          <h4 className="h4-single">References:</h4>
          <ul className="h4-single"><li>CAS n° 3734-33-6</li> <li>EINECS n° 223-095-2</li></ul>
          <h4 className="h4-single">Appearance:</h4>
          <ul className="h4-single"><li>povder</li> <li>granules</li></ul>
          <h4 className="h4-single">Packaging:</h4>
          <ul className="h4-single"><li>1kg bags</li> <li>5kg bags</li> <li>10kg bags</li> <li>packaging size customized on request</li> </ul>
          <h4 className="h4-single">Main characteristics:</h4>
          <ul className="h4-single">
            <li>Most bitter chemical substance known</li>
            <li>Suitable solution to avoid an accidental ingestion of hazardous products by children and pets</li>
            <li>A small quantity is efficient (only a couple of ppm) to make your product safer</li>
            <li>Essential product in alcohol denaturating</li>
          </ul>
          <h4 className="h4-single">Denatonium Benzoate, a well-known bittering agent</h4>
          <span>As of today, the poison statistics by accidental ingestion of chemical products such as detergents, cosmetics, antifreezes, or phytosanitary products (i.e products used to treat plants), show that too many people is still affected each year, especially young children willing to taste any reachable object and who are not yet able to differentiate non-food products from food products.<br/>

<br/>When added to the above mentioned dangerous chemical products, Denatonium Benzoate plays the role of a deterrent and contributes to prevent from hazardous ingestions by giving an extremely bitter and unpleasant taste to the products it is added to.

Increasingly, companies decide to add Denatonium Benzoate to their manufacturing process to prevent accidental ingestion of household or garden products and provide maximum security to their customers.<br/>

<br/>Denatonium Benzoate is one of the most bitter substances known and is equally used for many other purposes. It is indeed one of the substances most used for the denaturing of alcohol (especially ethanol) in order to make it undrinkable and ready for industrial uses. Denatonium Benzoate is also found in nail polish, where it helps to fight against onychophagy (i.e. severe nail biting). Its bittering properties make of Denatonium Benzoate an excellent repellent which, once added to phytosanitary products, contribute to deter animals from feeding on treated trees and plants. Its repellent qualities equally help to fight against rodents such as rats or mice.</span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product1;
