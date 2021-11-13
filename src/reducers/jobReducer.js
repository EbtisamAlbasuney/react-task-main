// import {
//   GET_PRODUCTS,
//   PRODUCTS_ERROR,
//   GET_PRODUCT,
//   FILTER_BY_NEW,
//   FILTER_BY_POPULAR,
//   FILTER_ALL,
// } from "../actions/types";
import initialState from "./initialstate";
const Job = (state = initialState.jobs, action) => {
  // const sorted=()=>{
  //   state.filterdProducts.sort((a,b)=>{a.price>b.price?1:-1})
  //   return state.filterdProducts
  // }
  const { type, payload } = action;
  console.log("state", state);
  switch (type) {
    case 'GET_JOBS':
      return {
        ...state,
        jobs: [...payload],
        filterdJobs: [...payload],

      };

    case 'GET_JOB':
      return {
        ...state,
        job: payload,
      };
    case 'FILTER':
      return {
        ...state,
        filterdJobs: [...payload],
      }

    case 'GET_ERROR':
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default Job;