import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listDocumentReducer from "./listDocumentReducer";
import listUserReducer from "./listUserReducer";
import documentReducer from "./documentReducer";
const reducers = combineReducers({
  auth: authReducer,
  listDocument: listDocumentReducer,
  listUser: listUserReducer,
  document: documentReducer,
});
export default reducers;
