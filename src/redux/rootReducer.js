import { combineReducers } from "redux";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
});

export default rootReducer;
