import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <Link
          to="https://github.com/krmmyvz"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="icon" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/keremyavuz1/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" />
        </Link>
      </div>
      <div className="footer-text">© Kerem Yavuz. Made with ❤️</div>
    </div>
  );
}

export default Footer;
