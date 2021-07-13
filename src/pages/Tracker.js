import React, { useState, useEffect } from "react";

import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

import api from "../utils/api";
import SetStatusIcon from "../utils/SetStatusIcon";

const Tracker = (props) => {
    const [updates, setUpdates] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const data = {
        trackingNumber: props.match.params.number,
      };

      api
        .get("/" + data.trackingNumber)
        .then((res) => {
          setUpdates(res.data[0]);
          setIsLoading(false);
        })
        .catch(() => {
          setError(true);
          setIsLoading(false);
          console.log("Código inválido");
        });
    }, [props.match.params.number]);

    return (
      <div className="min-h-0 flex flex-grow">
        <div className="updates-container container font-body mx-auto py-8 md:mt-8 px-2 sm:max-w-full md:w-4/5 xl:w-2/4">
          <div className="content">         
              {isLoading ? (
                <Loading />
              ) : !error ? (
                <div class="overflow-hidden min-w-full rounded mt-8 mb-16 border border-gray-200">
                <div>
                  <table class="table-fixed">
                    <thead>
                      <tr>
                        <th class="w-1/8"></th>
                        <th class="w-1/8"></th>
                        <th class="w-3/5"></th>
                        <th class="w-2/4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {updates
                        .slice()
                        .reverse()
                        .splice(1)
                        .map((update) => (
                          <tr>
                            <td class="pl-2 pr-1 bg-indigo-600">
                              {SetStatusIcon(update.status)}
                            </td>
                            <td class="px-2 py-4 bg-indigo-600">
                              <p class="font-normal text-white text-base lg:text-sm">
                                {update.data}
                              </p>
                              <p class="font-light text-gray-300 text-sm">
                                {update.hora}
                              </p>
                            </td>
                            <td class="border-b border-gray-200 px-2 bg-white">
                              <p class="font-medium text-gray-700 text-sm md:text-base lg:text-base">
                                {update.status}
                              </p>
                            </td>
                            <td class="font-normal text-gray-700 bg-white text-sm px-3 py-2 border-b border-gray-200">
                              {update.local}
                              <p class="font-normal text-gray-700 bg-white text-sm">
                                {update.destino}
                                <p class="font-normal text-gray-700 mt-1 bg-white text-sm">
                                  {update.origem}
                                </p>
                              </p>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>  
                ) : (
                <Error />
              )}
            </div>
         
        </div>
      </div>
    );
  };

export default Tracker;
