//configStore.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import dictionary from "./modules/Dictionary";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ dictionary });
const enhancer = applyMiddleware(...middlewares);

// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer);

export default store;