import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import designReducer from "./DesignReducer";
import userReducer from "./UserReducer";
export const reducers = combineReducers({
  authReducer,
  designReducer,
  userReducer,
});
