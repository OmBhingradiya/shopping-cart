import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ADD_TO_CART, REMOVE_TO_CART } from "./store/cart/cartAction";
import { useFinalReduCart } from "./store/cart/cartReducer";
import { GET_PRODUCT } from "./store/product/productAction";
import { useFinalRedu } from "./store/product/productReducer";

const Product = () => {
  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const { product, busy: productBusy } = useFinalRedu();
  const { cartData } = useFinalReduCart();

  useEffect(() => {
    if (!product.length) {
      dispatch({ type: GET_PRODUCT });
    }
  }, [product]);

  const addTocart = (cartData) => {
    dispatch({ type: ADD_TO_CART, payload: cartData });
  };
  const removeFromcart = (id) => {
    dispatch({ type: REMOVE_TO_CART, payload: id });
    console.log(cartData.includes(id));
  };

  console.log(cartData);

  return (
    <>
      <div>
        <Link to="/cart">
          <div
            style={{
              border: "2px solid black",
              width: "50px",
              margin: "0 auto",
            }}
            // onClick={() => {
            //   Navigator("/cart");
            // }}
          >
            {cartData.length}
          </div>
        </Link>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {product?.map((item, i) => {
            return (
              <div key={i} style={{ border: "2px solid black", width: "30%" }}>
                <div>
                  <p>{item.title}</p>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt="product"
                    style={{ width: "100px" }}
                  />
                </div>
                <div>
                  <p>Price: {item.price} ₹</p>
                </div>
                <div>
                  {cartData?.find((a) => a.id == item.id) ? (
                    <button onClick={() => removeFromcart(item.id)}>
                      Remove from cart
                    </button>
                  ) : (
                    <button onClick={() => addTocart(item)}>Add to cart</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
