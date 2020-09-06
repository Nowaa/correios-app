import React, { useState, useEffect } from "react";
import api from "../services/api";
import { IconContext } from "react-icons";
import {
  FiBox,
  FiTruck,
  FiUserX,
  FiSmile,
  FiThumbsUp,
  FiSend,
} from "react-icons/fi";

function switchIcon(params) {
  switch (params) {
    case "Objeto postado":
      return <FiBox />;
    case "Objeto encaminhado":
      return <FiTruck />;
    case "Objeto entregue ao destinatário":
      return <FiThumbsUp />;
    case "Objeto saiu para entrega ao destinatário":
      return <FiSend />;
    default:
      return <FiUserX />;
  }
}

export default function Tracker(props) {
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
        console.log("Código invalido");
      });
  }, [props.match.params.number]);

  return (
    <div className="min-h-screen bg-white">
      <div className="updates-container container w-full md:w-4/5 xl:w-3/5  mx-auto px-2 ">
        <div className="content">
          {/* <div class="m-8 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:mx-8 lg:px-8"> */}
          <div class="overflow-hidden min-w-full">
            {!error ? (
              <div>
                <h2 class="text-3xl px-4 py-8">Atualizações</h2>
                <div id="recipients" class="p-8 mt-6 lg:mt-0">
                  <table class="table-fixed bg-white">
                    <thead>
                      <tr>
                        <th class="px-1 py-2 w-1/8"></th>
                        <th class="px-1 py-2 w-1/8"></th>
                        <th class="px-4 py-2 w-2/4"></th>
                        <th class="px-4 py-2 w-3/4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {updates.map((update) => (
                        <tr>
                          <td class="border-transparent px-4 py-2 bg-gray-200">
                            {switchIcon(update.status)}
                          </td>

                          <td class="border-transparent px-4 py-2 bg-gray-200">
                            <p class="sm:text-sm md:text-base lg:text-base font-normal text-blue-400 ">
                              {update.data}
                            </p>
                            <p class="sm:text-base md:text-base lg:text-lg font-light text-gray-800">
                              {update.hora}
                            </p>
                          </td>
                          <td class="border-transparent px-4 py-2 bg-gray-100">
                            <p class="sm:text-base md:text-base lg:text-lg font-semibold text-gray-800">
                              {update.status}
                            </p>
                          </td>
                          <td class="border-transparent sm:text-sm md:text-base lg:text-lg font-normal text-gray-900 bg-gray-100">
                            {update.local}
                            <p class="font-normal sm:text-sm md:text-base lg:text-lg text-gray-900">
                              {update.origem}
                            </p>
                            <p class="font-normal sm:text-sm md:text-base lg:text-lg text-gray-900">
                              {update.destino}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p>Não encontrado</p>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
