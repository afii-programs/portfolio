/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" onClick={(e) => smoothScroll(e, "home")}>
        Home
      </a>
      <a href="#about" onClick={(e) => smoothScroll(e, "about")}>
        About
      </a>
      <a href="#portfolio" onClick={(e) => smoothScroll(e, "portfolio")}>
        Portfolio
      </a>
      <a href="#footer" onClick={(e) => smoothScroll(e, "footer")}>
        Contact
      </a>
    </div>
  );
};

export default Header;
