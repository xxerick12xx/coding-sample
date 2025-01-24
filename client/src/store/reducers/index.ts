import { combineReducers } from "redux";
import referralList from "./referral_list";
import counterSlice from "./counterSlice";

export default combineReducers({
  referral_list: referralList,
  counter: counterSlice,
});
