import { ipcheckReducer } from "./IPCHECK/ipcheck.reducers";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Users/user.reducers";

const rootReducer = combineReducers({
  ip: ipcheckReducer,
  auth: userReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));