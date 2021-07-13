import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="shadow-sm">
      <Link to="/">
        <p class="text-xl text-indigo-600 font-header py-3 px-6 md:px-20">
          cadê minha encomenda?
        </p>  
      </Link>
    </div>
  );
};

export default Header;
