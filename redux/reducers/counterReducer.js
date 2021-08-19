import { TAMBAH, KURANG } from "../actions/types";

const init = {
  counter: 0,
};

export default (state = init, action) => {
  switch (action.type) {
    case TAMBAH:
      console.log("Tambah Counter");
      return {
        ...state,
        counter: action.payload + 1,
      };
    case KURANG:
      console.log("Kurang Counter");
      return {
        ...state,
        counter: action.payload - 1,
      };
    default:
      return state;
  }
};
