import * as actionTypes from "./cardTypes";
const loadCurrentItem = (item) => {
  return {
    type: actionTypes.CURRENT_ITEM,
    payload: item,
  };
};

export default loadCurrentItem;
