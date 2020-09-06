import React from "react";
import Routes from "./routes";
import "./tailwind.output.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  limit: 1,
  hideProgressBar: true,
});

function App() {
  return <Routes />;
}

export default App;
