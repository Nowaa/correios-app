import React from "react";
import { FaRegSadTear } from "react-icons/fa";

const Error = () => {
  return (
    <div class="mt-16 font-montserrat">
      <div class="flex items-center justify-center text-indigo-600 mb-6">
        <FaRegSadTear size={104} />
      </div>
      <p class="flex items-center justify-center whitespace-no-wrap overflow-x-auto text-indigo-600 font-normal sm:text-md md:text-2xl lg:text-2xl xl:text-3xl">
        Não encontramos nada por aqui
      </p>
      <p class="flex items-center justify-center mt-2 text-gray-700 sm:text-sm md:text-lg lg:text-lg xl:text-xl">
        Confira o código digitado
      </p>
    </div>
  );
};

export default Error;
