import React, { useEffect, useState } from "react";
import Map from "./map";
import ControlledTabs from "./controlledTabs"
import Second from "./second";
import Third from "./third";
import { connect } from "react-redux";
import { getAllJobs, getCities, getJob, getCompainies, getJobTitles, getWorkTimes } from "../actions/index"

export const Page = ({ getAllJobs, getCities, getJob, getCompainies, getJobTitles, getWorkTimes }) => {
  useEffect(() => {
    getAllJobs();
    getCities();
    getCompainies();
    getJobTitles();
    getWorkTimes();
  }, []);
  return (
    <div>
      <Map></Map>
      <ControlledTabs></ControlledTabs>
      <Second></Second>
      <Third></Third>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("component", state)
  return { state: state };
};
export default connect(mapStateToProps, { getAllJobs, getCities, getJob, getCompainies, getJobTitles, getWorkTimes })(Page);