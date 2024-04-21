import {
    FIND_USER_PROFILE_REQUEST,
    FIND_USER_PROFILE_SUCCESS,
    FIND_USER_PROFILE_FAILURE
  } from "./ActionType";
  
  const initialState = {
    userProfile: null,
    loading: false,
    error: null
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIND_USER_PROFILE_REQUEST:
        return { ...state, loading: true, error: null };
      case FIND_USER_PROFILE_SUCCESS:
        return { ...state, loading: false, userProfile: action.payload, error: null };
      case FIND_USER_PROFILE_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  