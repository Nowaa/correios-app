import React from "react";

import { FiCoffee } from "react-icons/fi";

const Footer = () => {
  return (
    <div class="text-gray-100 font-footer flex items-center justify-center bg-indigo-600 shadow-sm pr-1 pt-1 pb-1 text-xs">
      made with
      <div class="pl-1 text-sm">
        <FiCoffee title={"coffee"} />
      </div>
      <div class="pl-1 text-xs">by Nowa</div>
    </div>
  );
};

export default Footer;
