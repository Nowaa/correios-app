import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="bg-indigo-600 shadow-lg">
      <Link to="/">
        <p class="text-2xl text-gray-100 font-esteban font-normal px-2 py-2 ml-8">
          cadê minha encomenda?
        </p>
      </Link>
    </div>
  );
};

export default Header;
