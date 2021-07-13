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
  FaQuestion,
  FaCommentDollar,
  FaDollarSign,
} from "react-icons/fa";

function SetStatusIcon(params) {
  switch (params) {
    case "Objeto postado":
      return <FaBox size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto postado após o horário limite da unidade":
      return <FaBox size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto em trânsito - por favor aguarde":
      return <FaShippingFast size={25} style={{ fill: "#f7fafc" }} />;
    case "Encaminhado para fiscalização aduaneira":
      return <FaShippingFast size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto recebido na unidade de exportação no país de origem":
      return <FaTruckLoading size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto recebido pelos Correios do Brasil":
      return <FaParachuteBox size={25} style={{ fill: "#f7fafc" }} />;
    case "Fiscalização aduaneira finalizada":
      return <FaFileSignature size={25} style={{ fill: "#f7fafc" }} />;
    case "Pagamento confirmado":
      return <FaDollarSign size={25} style={{ fill: "#f7fafc" }} />;
    case "Aguardando pagamento":
      return <FaCommentDollar size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto aguardando retirada no endereço indicado":
      return <FaHourglassHalf size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto saiu para entrega ao destinatário":
      return <FaDolly size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto entregue ao destinatário":
      return <FaRegSmileBeam size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto recebido na unidade de distribuição":
      return <FaBoxes size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto ainda não chegou à unidade":
      return <FaHourglassHalf size={25} style={{ fill: "#f7fafc" }} />;
    case "Destinatário ausente":
      return <FaUserTimes size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto roubado ou extraviado":
      return <FaRegSadTear size={25} style={{ fill: "#f7fafc" }} />;
    case "Objeto não localizado no fluxo postal":
      return <FaQuestion size={25} style={{ fill: "#f7fafc" }} />;
    default:
      return <FaTimes size={25} style={{ fill: "#f7fafc" }} />;
  }
}

export default SetStatusIcon;
