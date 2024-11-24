


import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.contentLeft}>
      <img src="./logo.png" alt="" width="200"/>
      </div>
      <div>
        <div style={styles.centerText}>Alone we can do so little, together we can do so much.</div>
        <div style={styles.centerText2}>Github Community SRM</div>
      </div>

      <div style={styles.contentRight}>
        <FaEnvelope style={styles.icon} />
        <RiTwitterXFill style={styles.icon} />
        <FaInstagram style={styles.icon} />
        <FaLinkedin style={styles.icon} />
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    height: "120px",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.64),rgba(57, 5, 65, 0.2) 80%, rgba(255, 255, 255, 0))",
  },

  contentLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  icon: {
    height: "40px",
    width: "40px"
  },
  text: {
    fontSize: "30px",
    color: "#FFFFFF",
    letterSpacing: -2,
    fontWeight: 650
  },
  smallText: {
    fontSize: "15px",
    color: "#FFFFFF",
    lineHeight: "4px"
  },
  centerText: {
    fontStyle: "italic",
    fontSize: "26px",
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: "32px",
    fontWeight: "500"
  },

  

  centerText2: {
    fontSize: "31px",
    color: "#FFFFFF",
    flexGrow: 1,
    textAlign: "center",
    lineHeight: "38px",
    fontWeight: "700"
  },

  contentRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};


export default Footer;

