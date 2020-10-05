import React from "react";

import { FaTimes } from "react-icons/fa";

const NotFound = () => {
  return (
    <div class="flex justify-center flex-grow mt-48">
      <div class="mt-16 font-montserrat">
        <div class="flex items-center justify-center text-indigo-600 mb-6">
          <FaTimes size={100} />
        </div>
        <p class="flex items-center justify-center whitespace-no-wrap overflow-x-auto text-indigo-600 font-bold sm:text-md md:text-2xl lg:text-2xl xl:text-3xl">
          404
        </p>
        <p class="flex items-center justify-center whitespace-no-wrap overflow-x-auto text-indigo-600 font-semibold text-lg xl:text-2xl">
          Não encontrado
        </p>
      </div>
    </div>
  );
};

export default NotFound;
