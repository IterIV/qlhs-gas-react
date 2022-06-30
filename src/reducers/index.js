import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import designReducer from "./DesignReducer";
export const reducers = combineReducers({ authReducer, designReducer });
