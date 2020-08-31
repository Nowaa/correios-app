import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const [value, setValue] = useState("");
  const history = useHistory();

  async function handleTrackNumber(e) {
    e.preventDefault();

    if (!value.length) {
      toast.warn("Informe um código", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    history.push("/tracker/" + value.trim());
  }

  return (
    <div class="flex min-h-screen items-center justify-center">
      <div class="w-1/2">
        <form
          class="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={handleTrackNumber}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-xl font-bold mb-2 py-3"
              for="trackingnumber"
            >
              Rastreie o seu objeto
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="trackingnumber"
              type="text"
              placeholder="PY3690361775BR"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div class="flex items-center justify-center">
            <button
              class="items-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Rastrear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
