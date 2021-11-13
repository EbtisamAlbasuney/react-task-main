
import initialState from "./initialstate";
const JobTitle = (state = initialState.jobTitles, action) => {

  const { type, payload } = action;
  console.log("state", state);
  switch (type) {

    case 'GET_JOBTITILES':
      return {
        ...state,
        jobTitles: [...payload],
      };


    case 'GET_ERROR':
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default JobTitle;