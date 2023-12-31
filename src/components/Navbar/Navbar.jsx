import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import { FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h3 className="app__navbar-title">Fine Dine Restaurant</h3>
        <FaGithubSquare
          className="app__navbar-gitIcon"
          size={25}
          onClick={() =>
            window.open("https://github.com/DegirmenKagan/fine-dine-react")
          }
        />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a
                  href="#home"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#about"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#menu"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#awards"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Contact
                </a>
              </li>
              <div className="app__navbar-login">
                <a href="login" className="p__opensans">
                  Log In / Register
                </a>
                <div />
                <a href="/" className="p__opensans">
                  Book Table
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
