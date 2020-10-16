import { SHOW_SPINER, HIDE_SPINER, CHANGE_SEARCH_STRING } from "./types";

export const spinerShowAction = () => {
  return {
    type: SHOW_SPINER,
    payload: true,
  };
};

export const spinerHideAction = () => {
  return {
    type: HIDE_SPINER,
    payload: false,
  };
};

export const changeSearchStringAction = (value) => {
  return {
    type: CHANGE_SEARCH_STRING,
    payload: value,
  };
};
