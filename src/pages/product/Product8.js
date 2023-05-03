import React from "react";
import "./Product.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Product8 = () => {
  return (
    <>
    <Navbar/>
    <section id="prodetails" className="section-p1" style={{paddingBottom: '10%'}}>
        <div className="single-pro-image">
          <img src={IMAGES.img8} className=".single-pro-image"  style={{ width: '70%', margin: '0 28%', borderRadius: '20px'}}/>
        </div>
        <div className="single-pro-details">
          <h3>Other denaturants</h3>

          <h4 className="h4-single"><ul><li>Acetone</li><li>Diethyl Ether (DEE)</li><li>Ethyl Acetate (ETAC)</li><li>Hexane</li><li>Isopropanol (IPA) : Industrial, cosmetic and pharma grades</li><li>Isobutanol</li><li>Isopropyl Acetate (IPAC)</li><li>Linalool</li><li>Methyl Ethyl Ketone (MEK)</li><li>Methanol</li><li>n-Butanol</li><li>n-Propanol</li><li>Wood Naphta</li></ul></h4>
          
          <h4 className="h4-single">If there is any denaturant that you are searching for and missing on the list, please don’t hesitate to contact us. Our product list isn’t exhaustive.</h4>
          </div>
      </section>
      <Footer />
    </>
  );
};

export default Product8;
