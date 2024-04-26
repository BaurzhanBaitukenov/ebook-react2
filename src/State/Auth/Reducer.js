import { FIND_USER_BY_ID_SUCCESS, FOLLOW_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_USER_SUCCESS } from "./ActionType"

const initialState = {
    user:null,
    isLoading:false,
    error:null,
    jwt:null
}
export const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading: true, error: null}
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
                return {...state, isLoading:false, error:null, jwt:action.payload}
        case GET_USER_SUCCESS:
            return {...state, isLoading:false, error:null, user:action.payload}
        // case UPDATE_USER_SUCCESS:
        //     return {...state, isLoading:false, error:null, user:action.payload, updateUser: true}
        case FIND_USER_BY_ID_SUCCESS:
        case UPDATE_USER_SUCCESS:
            return {...state, isLoading:false, error:null, findUser:action.payload}
        case FOLLOW_USER_SUCCESS:
            return {...state, isLoading:false, error:null, findUser:action.payload}
        
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state, isLoading:false, error:action.payload}
        case LOGOUT:
            return {...initialState}
            

        default:
            return state;
    }
}