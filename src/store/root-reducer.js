import { combineReducers } from "@reduxjs/toolkit";
import redu from "./product/productReducer";
import cartReducer from "./cart/cartReducer";
export default combineReducers({
  redu,
  cartReducer,
});
