import React from "react";

import Circle from "./Circle.gif";
const Spinner = () => {
  return (
    <div>
      <div className="text-center">
        <img src={Circle} alt="loading" />
      </div>
    </div>
  );
};

export default Spinner;
