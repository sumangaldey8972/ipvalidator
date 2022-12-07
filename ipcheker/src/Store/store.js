import { ipcheckReducer} from "./IPCHECK/ipcheck.reducers";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ip: ipcheckReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
