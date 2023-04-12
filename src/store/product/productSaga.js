import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCT, SET_PRODUCT } from "./productAction";

function* setProduct() {
  try {
    const result = yield call(getProduct);
    yield put({
      type: SET_PRODUCT,
      payload: result.data,
    });
  } catch (err) {
    console.log("err", err);
  }
}
export function getProduct() {
  return axios({
    method: "GET",
    url: "https://fakestoreapi.com/products",
  });
}
const useFinalSaga = function* () {
  yield all([takeLatest(GET_PRODUCT, setProduct)]);
};
export default useFinalSaga;
