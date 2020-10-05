import React from "react";

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

function SetStatusIcon(params) {
  switch (params) {
    case "Objeto postado":
      return <FaBox size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto postado após o horário limite da unidade":
      return <FaBox size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto encaminhado":
      return <FaShippingFast size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto recebido na unidade de exportação no país de origem":
      return <FaTruckLoading size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto recebido pelos Correios do Brasil":
      return <FaParachuteBox size={24} style={{ fill: "#f7fafc" }} />;
    case "Fiscalização aduaneira finalizada":
      return <FaFileSignature size={24} style={{ fill: "#f7fafc" }} />;
    case "Objeto aguardando retirada no endereço indicado":
      return <FaHourglassHalf size={24} style={{ fill: "#f7fafc" }} />;
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

export default SetStatusIcon;
