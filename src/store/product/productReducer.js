import { useSelector } from "react-redux";
import { GET_PRODUCT, SET_PRODUCT } from "./productAction";

const initialState = {
  product: [],
  busy: false,
  message: "",
};

const redu = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        busy: true,
        message: "",
      };
    case SET_PRODUCT:
      return {
        ...state,
        busy: false,
        message: "",
        product: action.payload,
      };
    default:
      return state;
  }
};
export default redu;

export function useFinalRedu() {
  return useSelector((state) => state.redu);
}
