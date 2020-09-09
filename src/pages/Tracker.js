import React, { useState, useEffect } from "react";
import Error from "../pages/Error";

import {
  FaBox,
  FaParachuteBox,
  FaTruckLoading,
  FaDolly,
  FaShippingFast,
  FaRegSmileBeam,
  FaUserTimes,
  FaRegSadTear,
  FaFileSignature,
  FaBoxes,
  FaHourglassHalf,
  FaTimes,
} from "react-icons/fa";

import api from "../utils/api";

function switchIcon(params) {
  switch (params) {
    case "Objeto postado":
      return <FaBox size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto encaminhado":
      return <FaShippingFast size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto recebido na unidade de exportação no país de origem":
      return <FaTruckLoading size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto recebido pelos Correios do Brasil":
      return <FaParachuteBox size={24} style={{ fill: "#f7fafc" }} />;
    case "Fiscalização aduaneira finalizada":
      return <FaFileSignature size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto saiu para entrega ao destinatário":
      return <FaDolly size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto entregue ao destinatário":
      return <FaRegSmileBeam size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto recebido na unidade de distribuição":
      return <FaBoxes size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto ainda não chegou à unidade":
      return <FaHourglassHalf size={24} style={{ fill: "#f7fafc" }} />;
    case "Destinatário ausente":
      return <FaUserTimes size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto roubado ou extraviado":
      return <FaRegSadTear size={24} style={{ fill: "#f7fafc" }} />;
    default:
      return <FaTimes size={24} style={{ fill: "#f7fafc" }} />;
  }
}

const Tracker = (props) => {
  {
    const [updates, setUpdates] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
      const data = {
        trackingNumber: props.match.params.number,
      };

      api
        .get("/" + data.trackingNumber)
        .then((res) => {
          setUpdates(res.data[0]);
        })
        .catch(() => {
          setError(true);
          console.log("Código inválido");
        });
    }, [props.match.params.number]);

    return (
      <div className="min-h-0 flex flex-grow bg-gray-100">
        <div className="updates-container container font-montserrat mx-auto py-8 px-2 sm:max-w-full md:w-4/5 xl:w-3/5">
          <div className="content">
            <div class="overflow-hidden min-w-full rounded mt-8 mb-16">
              {!error ? (
                <div>
                  <table class="table-fixed">
                    <thead>
                      <tr>
                        <th class="px-1 py-2 w-1/8"></th>
                        <th class="px-1 py-2 w-1/8"></th>
                        <th class="px-4 py-2 w-2/4"></th>
                        <th class="px-4 py-2 w-3/4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {updates
                        .slice()
                        .reverse()
                        .map((update) => (
                          <tr>
                            <td class="border-transparent px-2 py-2 bg-indigo-600">
                              {switchIcon(update.status)}
                            </td>
                            <td class="border-transparent px-1 py-2 bg-indigo-600">
                              <p class="font-sans font-light text-gray-200 text-base lg:text-lg">
                                {update.data}
                              </p>
                              <p class="font-light text-gray-400 text-sm xl:text-base">
                                {update.hora}
                              </p>
                            </td>
                            <td class="border-transparent px-3 pb-5 pt-2 bg-purple-100">
                              <p class="font-semibold text-gray-800 text-base md:text-md lg:text-lg xl:text-lg">
                                {update.status}
                              </p>
                            </td>
                            <td class="font-medium text-gray-800 bg-purple-100 border-transparent text-base lg:text-md xl:text-lg">
                              {update.local}
                              <p class="font-medium text-gray-800 bg-purple-100 mb-1 mr-1 text-base lg:text-md xl:text-lg">
                                {update.destino}
                                <p class="font-medium text-gray-800 bg-purple-100 mt-1 mr-1 text-base lg:text-md xl:text-lg">
                                  {update.origem}
                                </p>
                              </p>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <Error />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Tracker;
