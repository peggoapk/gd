import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="/contactUs" className={styles.footerAnchor}>
          Contact Us
        </a>
        <a href="/aboutUs" className={styles.footerAnchor}>
          About Us
        </a>
        <a href="/services" className={styles.footerAnchor}>
          Services
        </a>
      </div>
      <div>Copyright &copy; {new Date().getFullYear()} Mogollon Interiors.</div>
    </div>
  );
};

export default Footer;
