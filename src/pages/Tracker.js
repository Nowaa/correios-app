import React, { useState, useEffect } from "react";

import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

import api from "../utils/api";
import SetStatusIcon from "../utils/SetStatusIcon";

const Tracker = (props) => {
  {
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
      <div className="min-h-0 flex flex-grow bg-gray-100">
        <div className="updates-container container font-montserrat mx-auto py-10 md:mt-8 px-2 sm:max-w-full md:w-4/5 xl:w-2/4">
          <div className="content">
            <div class="overflow-hidden min-w-full rounded mt-8 mb-16">
              {isLoading ? (
                <Loading />
              ) : !error ? (
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
                            <td class="border-transparent px-2 py-2 bg-indigo-600">
                              {SetStatusIcon(update.status)}
                            </td>
                            <td class="border-transparent px-1 py-2 bg-indigo-600">
                              <p class="font-light text-white text-base lg:text-md">
                                {update.data}
                              </p>
                              <p class="font-light text-gray-100 text-sm">
                                {update.hora}
                              </p>
                            </td>
                            <td class="border-transparent px-2 bg-purple-100">
                              <p class="font-semibold text-gray-700 text-base md:text-md lg:text-md">
                                {update.status}
                              </p>
                            </td>
                            <td class="font-medium text-gray-900 bg-purple-100 text-base px-3 py-2 border-transparent lg:text-md">
                              {update.local}
                              <p class="font-medium text-gray-900 bg-purple-100 text-base lg:text-md">
                                {update.destino}
                                <p class="font-medium text-gray-900 bg-purple-100 text-base lg:text-md">
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
