import { CHANGE_SEARCH_STRING } from "./types";

const initialState = {
  searchString: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_STRING:
      return { searchString: action.payload };
    default:
      return state;
  }
};
