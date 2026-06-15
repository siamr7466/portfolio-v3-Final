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
        <FaLinkedinIn className="cursor-pointer transition-colors hover:text-white" />
        <FaInstagram className="cursor-pointer transition-colors hover:text-white" />
        <FaXTwitter className="cursor-pointer transition-colors hover:text-white" />
        <FaWhatsapp className="cursor-pointer transition-colors hover:text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
