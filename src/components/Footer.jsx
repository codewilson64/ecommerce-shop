import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-20 font-poppins">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="flex flex-col gap-7">
          <a href="#" className="text-white font-bold font-poppins text-3xl">
            E-commerce
          </a>
          <div className="flex gap-5 text-3xl text-gray-400 mx-auto">
            <FaSquareFacebook className="hover:text-white duration-300 cursor-pointer" />
            <SlSocialInstagram className="hover:text-white duration-300 cursor-pointer" />
            <SlSocialTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaWhatsapp className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
