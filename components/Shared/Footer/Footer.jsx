import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    footer: {
      height: "auto",
      padding: "20px",
      width: "100%",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: isMobile ? "center" : "space-between",
      alignItems: "center",
      background:
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.64),rgba(57, 5, 65, 0.2) 80%, rgba(255, 255, 255, 0))",
    },
    contentLeft: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: isMobile ? "10px" : "0",
    },
    icon: {
      height: "40px",
      width: "40px",
    },
    centerText: {
      fontStyle: "italic",
      fontSize: isMobile ? "18px" : "26px",
      color: "#FFFFFF",
      textAlign: "center",
      lineHeight: isMobile ? "24px" : "32px",
      fontWeight: "500",
    },
    centerText2: {
      fontSize: isMobile ? "20px" : "31px",
      color: "#FFFFFF",
      flexGrow: 1,
      textAlign: "center",
      lineHeight: isMobile ? "28px" : "38px",
      fontWeight: "700",
    },
    contentRight: {
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-start",
      alignItems: "center",
      gap: "10px",
      marginTop: isMobile ? "10px" : "0",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.contentLeft}>
        <img src="./logo.png" alt="Logo" width={isMobile ? "150" : "200"} />
      </div>
      <div>
        <div style={styles.centerText}>
          Alone we can do so little, together we can do so much.
        </div>
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

export default Footer;
