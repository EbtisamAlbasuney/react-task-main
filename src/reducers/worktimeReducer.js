
import initialState from "./initialstate";
const WorkTime = (state = initialState.workTimes, action) => {

  const { type, payload } = action;
  console.log("state", state);
  switch (type) {

    case 'GET_WORKTIMES':
      return {
        ...state,
        workTimes: [...payload],
      };


    case 'GET_ERROR':
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default WorkTime;