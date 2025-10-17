import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">LEE'S LAB</div>

      <div className="footer-right">
        <a href="#research">Research</a>
        <a href="#people">People</a>
        <a href="#updates">Lab Updates</a>
        <a href="#publications">Publications</a>
        <a href="#contact">Contact</a>
        <a href="#login" className="login-icon">🔒</a>
      </div>
    </footer>
  );
}

export default Footer;
