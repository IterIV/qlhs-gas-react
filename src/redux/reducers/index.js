import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listDocumentReducer from "./listDocumentReducer";
import userReducer from "./userReducer";
import documentReducer from "./documentReducer";
const reducers = combineReducers({
  auth: authReducer,
  listDocument: listDocumentReducer,
  user: userReducer,
  document: documentReducer,
});
export default reducers;
