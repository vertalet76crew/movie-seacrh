import { combineReducers } from "redux";
import { spinerReducer } from "./spinerReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  showSpiner: spinerReducer,
  searchString: searchReducer,
});
