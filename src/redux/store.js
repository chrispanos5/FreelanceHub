import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./authReducer";

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
