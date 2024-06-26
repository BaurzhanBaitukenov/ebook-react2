import { FIND_USER_BY_ID_FAILURE, FIND_USER_BY_ID_REQUEST, FIND_USER_BY_ID_SUCCESS, FOLLOW_USER_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt:null,
    updateUser:false,
    searchResult:[]
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_REQUEST:
      case GET_USER_REQUEST:
      case FIND_USER_BY_ID_REQUEST:
      case FOLLOW_USER_REQUEST:
        return { ...state, loading: true, error: null };
      case SEARCH_USER_REQUEST:
        return {...state,searchResult:[],loading:true,error:null}

      case UPDATE_USER_REQUEST:
        return { ...state, loading: true, error: null,updateUser:false };

      case GET_USER_SUCCESS:
        return{...state, loading:false, error:null, user:action.payload, }

      case UPDATE_USER_SUCCESS:
        return{...state, loading:false, error:null, user:action.payload, updateUser:true }
      
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return { ...state, loading: false, jwt: action.payload, error: null };
      
      case FIND_USER_BY_ID_SUCCESS:
        return{...state, loading:false, findUser:action.payload, error:null};

      case SEARCH_USER_SUCCESS:
        return{...state, loading:false, searchResult:action.payload, error:null};

      case FOLLOW_USER_SUCCESS:
        return {...state, loading:false, findUser:action.payload,error:null};

      case LOGIN_FAILURE:
      case REGISTER_FAILURE:
      case GET_USER_FAILURE:
      case UPDATE_USER_FAILURE:
      case FIND_USER_BY_ID_FAILURE:
      case FOLLOW_USER_FAILURE:
      case SEARCH_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      
      case LOGOUT:
        return {...initialState}
      default:
        return state;
    }
  };
  
  export default authReducer;