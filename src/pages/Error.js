import React from "react";
import { FaRegSadTear } from "react-icons/fa";

const Error = () => {
  return (
    <div class="mt-48 font-montserrat">
      <div class="flex items-center justify-center text-indigo-600 mb-6">
        <FaRegSadTear size={104} />
      </div>
      <p class="flex items-center justify-center whitespace-no-wrap overflow-x-auto text-indigo-600 font-normal text-xl md:text-2xl">
        Não encontramos nada por aqui...
      </p>
      <p class="flex items-center justify-center mt-2 text-gray-700 text-base md:text-lg">
        Confira o código digitado
      </p>
    </div>
  );
};

export default Error;
