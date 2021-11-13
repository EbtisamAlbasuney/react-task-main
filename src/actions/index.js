import axios from "../utalities/api";
import api from "axios";
// import { GET_PRODUCTS, PRODUCTS_ERROR, GET_PRODUCT, FILTER_ALL } from "./types";

export const getAllJobs = () => async (dispatch) => {
  try {
    const res = await axios.get("/jobs");

    const jobs = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
    dispatch({
      type: 'GET_JOBS',
      payload: jobs,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
    });
  }
};

export const getJob = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/jobs/${id}`);
    dispatch({
      type: 'GET_JOB',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
    });
  }
};


export const getCompainies = () => async (dispatch) => {
  try {
    const res = await axios.get("/companyies");
    console.log("comp", res)
    dispatch({
      type: 'GET_COMPANIES',
      payload: res.data,
    });
  } catch (error) {
    console.log("err", error)
    dispatch({
      type: 'GET_ERROR',
    });
  }
};

export const getCities = () => async (dispatch) => {
  try {
    const res = await axios.get("/cities");
    dispatch({
      type: 'GET_CITIES',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
    });
  }
};
export const getWorkTimes = () => async (dispatch) => {
  try {
    const res = await axios.get("/workTimes");
    dispatch({
      type: 'GET_WORKTIMES',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
    });
  }
};
export const getJobTitles = () => async (dispatch) => {
  try {
    const res = await axios.get("/jobTitles");
    dispatch({
      type: 'GET_JOBTITILES',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ERROR',
    });
  }
};

export const handleSearch = (all, jobTitles, cities, jobTitle, city, company) => async (dispatch) => {

  console.log("all", all, jobTitles, cities, jobTitle, city, company)
  let jobt, cityt;
  if (jobTitle) {
    console.log("jobTitle", jobTitle)
    jobt = jobTitles.filter(j => j.keywords.includes(jobTitle))[0]?.id || "not";
    console.log("jobt", jobt)
  }
  if (city) {
    cityt = cities.filter(c => c.keywords.includes(city))[0]?.id || "not";
  }
  let filtered = all;
  if (jobt) {

    filtered = filtered.filter(el => el.jobtitleId == jobt)
  }
  if (cityt) {
    filtered = filtered.filter(el => el.cityId == cityt)

  }
  if (company) {
    filtered = filtered.filter(el => el.companyId == company)

  }
  console.log("fil", filtered)

  dispatch({
    type: 'FILTER',
    payload: filtered
  });

}


