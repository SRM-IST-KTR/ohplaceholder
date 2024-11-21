import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link"; // Import Link from next/link

const Navbar = () => {
  const [color, setColor] = useState("transparent");
  const [menuOpen, setMenuOpen] = useState(false);

  // Change background color on scroll
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor("#000");
    } else {
      setColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full fixed z-10 top-0 left-0 flex justify-between items-center p-4 transition-colors duration-300"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 lg:gap-12">
        <Link href="/" legacyBehavior>
          <a className="block hover:text-yellow-400">Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="block hover:text-yellow-400">About Us</a>
        </Link>
        <Link href="/schedule" legacyBehavior>
          <a className="block hover:text-yellow-400">Schedule</a>
        </Link>
        <Link href="/tracks" legacyBehavior>
          <a className="block hover:text-yellow-400">Tracks</a>
        </Link>
        <Link href="/faqs" legacyBehavior>
          <a className="block hover:text-yellow-400">FAQs</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="block hover:text-yellow-400">Contact Us</a>
        </Link>
      </nav>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl"
        >
          <AiOutlineClose />
        </button>
        <nav className="flex flex-col items-start p-8 gap-4 mt-10">
          <Link href="/" legacyBehavior>
            <a className="block hover:text-yellow-400" onClick={toggleMenu}>
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block hover:text-yellow-400" onClick={toggleMenu}>
              About Us
            </a>
          </Link>
          <Link href="/schedule" legacyBehavior>
            <a className="block hover:text-yellow-400" onClick={toggleMenu}>
              Schedule
            </a>
          </Link>
          <Link href="/tracks" legacyBehavior>
            <a className="block hover:text-yellow-400" onClick={toggleMenu}>
              Tracks
            </a>
          </Link>
          <Link href="/faqs" legacyBehavior>
            <a className="block hover:text-yellow-400" onClick={toggleMenu}>
              FAQs
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block hover:text-yellow-400" onClick={toggleMenu}>
              Contact Us
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
