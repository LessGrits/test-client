import {combineReducers} from "redux";
import {hotdogsReducer} from "./hotdogstReduser";
import {appReducer} from "./appReducer";

export const rootReduser = combineReducers({
  hotdogs: hotdogsReducer,
  app: appReducer
  });