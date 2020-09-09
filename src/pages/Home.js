import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  async function handleTrackNumber(e) {
    e.preventDefault();

    if (!value.trim().length) {
      toast("Informe um código", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    history.push("/tracker/" + value);
  }

  return (
    <div class="flex flex-grow justify-center">
      <div class="mt-64 w-1/2">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleTrackNumber}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-lg font-montserrat font-semibold mb-2 py-3"
              for="trackingnumber"
            >
              Rastreie o seu objeto
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-400"
              id="trackingnumber"
              type="text"
              placeholder="PY3690361775BR"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div class="flex items-center justify-center">
            <button
              class="items-center text-white font-montserrat font-bold py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              type="submit"
            >
              Rastrear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
