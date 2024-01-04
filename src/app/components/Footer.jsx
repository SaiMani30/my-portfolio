"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Calculate the bottom position (considering some threshold)
      const bottomThreshold = documentHeight - windowHeight - 200;

      setShowButton(scrollY > 100);

      // Check if the user has reached the bottom of the page
      if (scrollY > bottomThreshold) {
        setShowBottomArrow(true);
      } else {
        setShowBottomArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showBottomArrow, setShowBottomArrow] = useState(false);

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>©SAI MANIKANTA PATRO</span>
        <span>saimanikantapatro8@gmail.com</span>
        <p className="text-slate-600">All rights reserved.</p>

        {showButton && (
          <button
            className={`back-top-btn ${showBottomArrow ? "bottom" : ""} ${showButton ? "active" : ""}`}
            aria-label={showBottomArrow ? "Go to Bottom" : "Back to Top"}
            onClick={handleBackToTop}
          >
            {showBottomArrow ? <FaArrowDown size={13} /> : <FaArrowUp size={13} />}
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
