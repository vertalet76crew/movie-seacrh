import { SHOW_SPINER, HIDE_SPINER } from "./types";

const initialState = {
  showSpiner: true,
};

export const spinerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINER:
      return { showSpiner: action.payload };
    case HIDE_SPINER:
      return { showSpiner: action.payload };
    default:
      return state;
  }
};
