import designAPI from "../../api/designAPI";
import { listDocumentTypes } from "../constains/listDocumentType";
import { documentTypes } from "../constains/documentType";

const startFecthList = () => ({ type: listDocumentTypes.START_FETCH });
const fetchListFail = (
  payload = { success: false, data: null, message: "" }
) => ({
  type: listDocumentTypes.FETCH_FAIL,
  payload,
});
const fetchListSuccess = (
  payload = { success: true, data: {}, message: "" }
) => ({
  type: listDocumentTypes.FETCH_SUCCESS,
  payload,
});

export const getNewDesignAction = (token) => async (dispatch) => {
  dispatch(startFecthList());
  try {
    const payload = await designAPI.getNewDesign(token);
    if (!payload.success) {
      dispatch(fetchListFail(payload));
    } else {
      dispatch(fetchListSuccess(payload));
    }
  } catch (error) {
    const payload = { success: false, data: null, message: error.message };
    dispatch(fetchListFail(payload));
  }
};
export const resetListDocumentMessage = () => ({
  type: listDocumentTypes.RESET_MESSAGE,
});

// DOCUMENT =====================================
const startFecthDocument = () => ({ type: documentTypes.START_FETCH });
const fetchDocumentFail = (
  payload = { success: false, data: null, message: "" }
) => ({
  type: documentTypes.FETCH_FAIL,
  payload,
});
const updateDocumentSuccess = (
  payload = { success: true, data: {}, message: "" }
) => ({
  type: documentTypes.UPDATE_SUCCESS,
  payload,
});
export const addUserToDocument =
  (token, id, userID, handleReset) => async (dispatch) => {
    dispatch(startFecthDocument());
    try {
      const payload = await designAPI.addPersonToDocument(token, id, userID);
      if (!payload.success) {
        dispatch(fetchDocumentFail(payload));
      } else {
        dispatch(updateDocumentSuccess(payload));
        handleReset();
      }
    } catch (error) {
      const payload = { success: false, data: null, message: error.message };
      dispatch(fetchDocumentFail(payload));
    }
  };
export const resetDocumentMessage = () => ({
  type: documentTypes.RESET_MESSAGE,
});
