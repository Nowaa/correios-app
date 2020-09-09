import React from "react";

import { FiCoffee } from "react-icons/fi";

const Footer = () => {
  return (
    <div class="text-white font-montserrat flex items-center justify-center bg-indigo-600 shadow-sm pr-1 pt-2 pb-2 text-xs">
      made with
      <div class="pl-1 text-sm">
        <FiCoffee />
      </div>
      <div class="pl-1 text-xs">by Nowa</div>
    </div>
  );
};

export default Footer;
