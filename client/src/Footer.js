import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link to="/contactUs" className={styles.footerAnchor}>
          Contact Us
        </Link>
        <Link to="/aboutUs" className={styles.footerAnchor}>
          About Us
        </Link>
        <Link to="/services" className={styles.footerAnchor}>
          Services
        </Link>
      </div>
      <div>Copyright &copy; {new Date().getFullYear()} Mogollon Interiors.</div>
    </div>
  );
};

export default Footer;
