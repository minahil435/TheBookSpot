import { combineReducers, createStore } from "redux";
import { CartReducer } from "./cartRedux";
import { userReducer } from "./userReduc";

const rootReducer = combineReducers({
    user: userReducer,
    shoppingCart: CartReducer,
})


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store