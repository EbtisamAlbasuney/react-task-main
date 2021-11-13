
import initialState from "./initialstate";
const City = (state = initialState.cities, action) => {
  console.log(state)
  const { type, payload } = action;
  console.log("o", payload)
  console.log("state", state);
  switch (type) {


    case 'GET_CITIES':
      return {
        ...state,
        cities: [...payload],
      };

    case 'GET_ERROR':
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default City;