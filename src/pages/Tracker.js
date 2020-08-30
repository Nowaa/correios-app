import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function Tracker(props) {
  const [updates, setUpdates] = useState([]);

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
        console.log("Código invalido");
      });
  });

  return (
    <div className="updates-container">
      <div className="content">
        <h2>Atualizações</h2>
        <div class="-my 2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:mx-8 lg:px-8">
          <div class="align-middle inline-block overflow-hidden min-w-full">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-4 py-2">Status</th>
                  <th class="px-4 py-2">Local</th>
                </tr>
              </thead>
              <tbody>
                {updates.map((update) => (
                  <tr>
                    <td class="border px-4 py-2 text-gray-800">
                      {update.status}
                      <p class="text-xs text-gray-600">{update.data}</p>
                    </td>
                    <td class="border px-4 py-2 text-gray-800">
                      {update.local}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
