import React from "react";
import Routes from "./routes";
import "./tailwind.output.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  limit: 1,
  autoClose: 2000,
  draggable: true,
  hideProgressBar: true,
});

function App() {
  return <Routes />;
}

export default App;
