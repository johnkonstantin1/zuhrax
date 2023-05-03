import React from "react";
import "./UsesStyles.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Uses2 = () => {
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
          <h3>Ethanol Alcohol denaturing agent</h3>
          <span>
            Denaturing agent is a substance used to make ethanol or alcohol
            unfit for human consumption.<br/> The use of denaturing agents is
            conditioned and controlled by excise policy at national/European
            level. There is a large scale of ethanol and alcohol denaturants
            which are mainly applied in mixtures of minimum 2 or 3 substances,
            following the proportions strictly defined and approved by national
            authorities. <br/>You can find description of different denaturing agents
            in the product area of our website. The choice and combination of
            denaturants depends on final aplication and related national
            legislation.
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

export default Uses2;
