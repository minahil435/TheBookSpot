import { combineReducers, createStore } from "redux";
import { CartReducer } from "./cartRedux";

const store = createStore(
    CartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store