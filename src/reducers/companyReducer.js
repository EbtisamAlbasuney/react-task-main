
// import { act } from "react-dom/test-utils";
import initialState from "./initialstate";
const Company = (state = initialState.companyies, action) => {

  const { type, payload } = action;
  console.log("pa", action, payload)
  console.log("state", state);
  switch (type) {
    case 'GET_COMPANIES':
      return {
        ...state,
        companyies: [...payload],

      };


    case 'GET_ERROR':
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default Company;