import { combineReducers } from "redux";
import job from "./jobReducer";
import company from "./companyReducer";
import city from "./cityReducer";
import workTime from "./worktimeReducer";
import jobTitle from "./jobtitlesReducer";
const rootReducers = combineReducers({
  jobs: job,
  companyies: company,
  cities: city,
  workTimes: workTime,
  jobTitles: jobTitle
});
export default rootReducers;