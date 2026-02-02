import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// import { thunk } from "redux-thunk";
import {thunk}  from "redux-thunk";
import { productReducer } from "./reducers/productReducer";

// Enable Redux DevTools safely
const composeEnhancers =
    typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const rootReducer = combineReducers({
    productData: productReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;