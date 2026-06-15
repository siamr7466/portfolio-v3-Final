import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        {/* Responsive Text: Smaller on phones (text-xl), standard on laptops (md:text-2xl) */}
        <h2 className="mx-2 text-xl md:text-2xl">Siam Rahman</h2>
      </div>

      {/* Responsive Icons: Smaller gaps and size on phones, larger on laptops */}
      <div className="flex items-center justify-center gap-3 md:gap-6 text-xl md:text-2xl text-gray-300">
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/siam-rahman76/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-colors hover:text-white"
        >
          <FaLinkedinIn />
        </a>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/__siam._.rahman__"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-colors hover:text-white"
        >
          <FaInstagram />
        </a>

        {/* X (Twitter) Link */}
        <a
          href="https://x.com/siamrofficial76"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-colors hover:text-white"
        >
          <FaXTwitter />
        </a>

        {/* WhatsApp Link */}
        <a
          href="https://wa.me/8801725963600"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-colors hover:text-white"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
