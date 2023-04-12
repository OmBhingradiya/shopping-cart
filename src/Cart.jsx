import React from "react";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  DECREMNET,
  REMOVE_TO_CART,
} from "./store/cart/cartAction";
import { useFinalReduCart } from "./store/cart/cartReducer";

const Cart = () => {
  const { cartData } = useFinalReduCart();
  const dispatch = useDispatch();
  let totalQuantity = 0;
  let totalPrice = 0;
  cartData.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return (
    <>
      <div>
        {cartData?.map((item) => {
          return (
            <>
              <div>
                <div>{item.title}</div>
                <div> {item.price}</div>
                <div style={{ display: "flex" }}>
                  <button
                    onClick={() => dispatch({ type: DECREMNET, payload: item })}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() =>
                      dispatch({ type: ADD_TO_CART, payload: item })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <p>
          total Quantity = {totalQuantity} | price:
          <strong> {totalPrice.toFixed(2)}</strong>
        </p>
      </div>
    </>
  );
};

export default Cart;
