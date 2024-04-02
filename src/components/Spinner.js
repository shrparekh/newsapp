import React, { Component } from "react";

import Circle from "./Circle.gif";
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <img src={Circle} alt="loading" />
        </div>
      </div>
    );
  }
}

export default Spinner;
