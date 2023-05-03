import React from "react";
import "./UsesStyles.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Uses1 = () => {
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
          <h3>Aversive bittering agent</h3>
          <span>
            Aversive bittering agent is an unpleasantly flavored agent added to
            potentially hazardous products for human and animal health to avoid
            any accidental ingestion.<br></br>
            The optimal aversive bittering agent requires a good balance between
            the safety toxic level (= low toxicity for human and animal health)
            and the taste treshold limit (detection of the bitterness by humans
            and animals at low level concentration). <br></br>Denatonium Benzoate is an
            optimal solution. The bittering agent is the most bitter substance
            known in the world, with low toxicity and detectable already at
            concentrations as low as 50 parts per billion. Main application
            areas: detergents, cosmetics, automotive products, phytosanitary
            products, paints.
          </span>
          <h4 className="h4-single">Services:</h4>
          <span>
            Based on our experience, we can recommend you the best option and
            fit the product and its packaging to your needs. Form: Denatonium
            Benzoate can be used in pure form or in solutions depending on your
            manufacturing process and final application. We advise and process
            the product form according to your specifications. Packaging: We can
            deliver the material in different types and sizes of packaging.
            Logistics: We guarantee a minimum permanent stock of most of our
            products. We work with reliable transport companies to insure safe
            and fast delivery.{" "}
          </span>

          <h4 className="h4-single">
            Please contact us to define the best solution for you.
          </h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Uses1;
