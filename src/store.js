import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
