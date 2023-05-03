import React from "react";
import "./Service.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import IMAGES from "../../assets";

const Service1 = () => {
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
          <h3>Packaging</h3>
          <span>
            We supply our customers with a large scale of packaging from 1 L
            bottles to 1000 L containers.
            <br /> If the existing packaging doesn’t meet your request, we can
            adapt it to your requirements.
          </span>
          <h4 className="h4-single">
            Proposed sizes and types of packaging(liquids):
          </h4>
          <span>
            bottles of 1 L<br /> plastic drums 5 L 20 L 30 L 100 L<br /> metal
            drum 200 L<br />
            IBC of 1000 L<br /> bulk
          </span>
          <h4 className="h4-single">
            Proposed sizes and types of packaging(solids):
          </h4>
          <span>
            100 g bags
            <br />
            300 g bags
            <br />
            1 kg bags
            <br />
            5 kg bags
            <br />
            10 kg bags
            <br />
            The packaging can always be adapted on request.
          </span>
          <h4 className="h4-single">Don’t hesitate to contact us.</h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service1;
