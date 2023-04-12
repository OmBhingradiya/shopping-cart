import { all, fork } from "redux-saga/effects";
import useFinalSaga from "./product/productSaga";

export default function* rootSaga() {
  yield all([fork(useFinalSaga)]);
}
