import React from "react";

import ReactLoading from "react-loading";

const Loading = () => (
  <div className="flex items-center justify-center mt-48">
    <ReactLoading
      type={"bubbles"}
      color={"#5a67d8"}
      height={"13%"}
      width={"13%"}
    />
  </div>
);

export default Loading;
