import { useSelector } from "react-redux";
import { ADD_TO_CART, DECREMNET, REMOVE_TO_CART } from "./cartAction";

const initialState = {
  cartData: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isItem = state.cartData.find((item) => item.id === action.payload.id);
      if (isItem) {
        isItem.quantity++;
      } else {
        state.cartData.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== action.payload),
      };
    case DECREMNET:
      const decItem = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      if (decItem.quantity === 1) {
        decItem.quantity = 1;
      } else {
        decItem.quantity--;
      }
      return {
        ...state,
        quantity: decItem,
      };

    default:
      return state;
  }
};
export default cartReducer;

export function useFinalReduCart() {
  return useSelector((state) => state.cartReducer);
}
