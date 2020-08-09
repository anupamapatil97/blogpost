
import {combineReducers} from "../../node_modules/redux";
import postReducer from "./postRed";
// import combineReducers from './index';
export default combineReducers({
  posts: postReducer,
});
