import React from "react";
import Left from "./left";
import Slider from "./slider";

export const Third = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8  ">
        <Left></Left>
        </div>
        <div className="col-lg-3 mt-5 ">
        <Slider>
        </Slider>
        </div>
      </div>
    </div>
  );
};
export default Third;