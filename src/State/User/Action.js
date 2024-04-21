import { api } from "../../config/config";
import { FIND_USER_PROFILE_FAILURE, FIND_USER_PROFILE_REQUEST, FIND_USER_PROFILE_SUCCESS } from "./ActionType";

export const findUserProfile = () => async (dispatch) => {
    dispatch({ type: FIND_USER_PROFILE_REQUEST });
    try {
      const response = await api.get('/api/users/profile');
      dispatch({ type: FIND_USER_PROFILE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: FIND_USER_PROFILE_FAILURE,
        payload: error.message
      });
    }
  };