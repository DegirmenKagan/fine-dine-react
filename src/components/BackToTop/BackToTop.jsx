import React, { useEffect, useState } from "react";
import "./BackToTop.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const toTopFunc = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app__backtotop_icons">
      {/* <a href="#home"> */}
      {scrollTop !== 0 && (
        <FaArrowAltCircleUp id="topBtn" onClick={toTopFunc} />
      )}

      {/* </a> */}
    </div>
  );
};

export default BackToTop;
