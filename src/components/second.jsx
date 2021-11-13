import React from "react";
import JobsTabs from "./jobsTabs";
import SearchBox from "./searchbox";

export const Second = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8  ">
        <JobsTabs></JobsTabs>
        </div>
        <div className="col-lg-3 mt-5 ">
        <SearchBox></SearchBox>
        </div>
      </div>
    </div>
  );
};
export default Second;