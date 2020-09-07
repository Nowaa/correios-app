import React from "react";

import { FiCoffee } from "react-icons/fi";

const Footer = () => {
  return (
    <div class="text-white font-montserrat flex items-center justify-center bg-indigo-600 shadow-sm pr-1 pt-2 pb-2 sm:text-xs md:text-sm lg:text-sm xl:text-sm">
      Made with
      <div class="pl-1 text-base">
        <FiCoffee />
      </div>
      <div class="pl-1 sm:text-xs md:text-sm lg:text-sm xl:text-sm">
        by Nowa
      </div>
    </div>
  );
};

export default Footer;
