import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra
        non ipsum ac congue. Vestibulum quis turpis nisi. Maecenas magna nunc,
        gravida ut orci eu, convallis feugiat nunc.
      </p>
      <div style={{ marginTop: 15, marginBottom: 15 }} />
      <button type="button" className="custom__button">
        <a href="#menu">Explore Menu</a>
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
