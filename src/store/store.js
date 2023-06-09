import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};
const initStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(bindMiddleware([sagaMiddleware]))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default initStore;
