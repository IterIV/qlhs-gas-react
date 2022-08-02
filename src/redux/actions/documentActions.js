import DesignAPI from "../../api/DesignAPI";
import { documentTypes } from "../constains/documentType";

const designAPI = new DesignAPI();
const start = () => ({ type: documentTypes.START });
const fail = (message) => ({
  type: documentTypes.FAIL,
  message,
});
// ? Add
export const addNew = (token, document, navigate) => async (dispatch) => {
  dispatch(start());
  try {
    const payload = await designAPI.addNew(token, document);
    const { data, success, message } = payload;
    if (!success) {
      dispatch(fail(message));
    } else {
      dispatch({ type: documentTypes.ADD_NEW, data, message });
      navigate("../design/new", { replace: true });
    }
  } catch (error) {
    dispatch(fail(error.message));
  }
};
export const getNew = (token) => async (dispatch) => {
  dispatch(start());
  try {
    const payload = await designAPI.getNew(token);
    const { data, success, message } = payload;
    if (!success) {
      dispatch(fail(message));
    } else {
      dispatch({ type: documentTypes.GET_NEW, data, message });
    }
  } catch (error) {
    dispatch(fail(error.message));
  }
};
// export const getNewDesignAction = (token) => async (dispatch) => {
//   dispatch(startFecthList());
//   try {
//     const payload = await designAPI.getNewDesign(token);
//     if (!payload.success) {
//       dispatch(fetchListFail(payload));
//     } else {
//       dispatch(fetchListSuccess(payload));
//     }
//   } catch (error) {
//     const payload = { success: false, data: null, message: error.message };
//     dispatch(fetchListFail(payload));
//   }
// };
// export const resetListDocumentMessage = () => ({
//   type: listDocumentTypes.RESET_MESSAGE,
// });

// export const deleteDocument = (token, id) => async (dispatch) => {
//   dispatch(startFecthList());
//   try {
//     const payload = await designAPI.delete(token, id);
//     if (!payload.success) {
//       dispatch(fetchListFail(payload));
//     } else {
//       dispatch({ type: listDocumentTypes.DELETE_DOCUMENT, payload });
//     }
//   } catch (error) {
//     const payload = { success: false, data: null, message: error.message };
//     dispatch(fetchListFail(payload));
//   }
// };
// // DOCUMENT =====================================
// const startFecthDocument = () => ({ type: documentTypes.START_FETCH });
// const fetchDocumentFail = (
//   payload = { success: false, data: null, message: "" }
// ) => ({
//   type: documentTypes.FETCH_FAIL,
//   payload,
// });
// const updateDocumentSuccess = (
//   payload = { success: true, data: {}, message: "" }
// ) => ({
//   type: documentTypes.UPDATE_SUCCESS,
//   payload,
// });

// export const addUserToDocument =
//   (token, id, userID, handleReset) => async (dispatch) => {
//     dispatch(startFecthDocument());
//     try {
//       const payload = await designAPI.addPersonToDocument(token, id, userID);
//       if (!payload.success) {
//         dispatch(fetchDocumentFail(payload));
//       } else {
//         dispatch(updateDocumentSuccess(payload));
//         handleReset();
//       }
//     } catch (error) {
//       const payload = { success: false, data: null, message: error.message };
//       dispatch(fetchDocumentFail(payload));
//     }
//   };
