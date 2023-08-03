import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem street ipsum dolor Avenue, sit amet consectetur adipisicing
          elit. Modi nihil iure
        </p>
        <p className="p__cormorant" style={{color:'#DCCA87',margin:'2rem 0'}}>
          Open Hours
        </p>
        <p className="p__opensans">
          Mon - Fri: 9:00 am - 11:30 pm
        </p>
        <p className="p__opensans">
          Sat - Sun: 10:00 am - 00:30 am
        </p>
      </div>
      <button className="custom__button" style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
