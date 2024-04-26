import axios from "axios"
import { FIND_USER_BY_ID_FAILURE, FIND_USER_BY_ID_SUCCESS, FOLLOW_USER_FAILURE, FOLLOW_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS } from "./ActionType";
import { API_BASE_URL, api } from "../../config/config";

const token = localStorage.getItem("jwt");
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });


export const register = (userData) => async (dispatch) => {

    dispatch(registerRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
        const user = response.data;
        console.log("user ", user)
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("user ", user)
        dispatch(registerSuccess(user.jwt))


    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}


/////////////////
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {

    dispatch(loginRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("user ", user)
        dispatch(loginSuccess(user.jwt))


    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}



//////////////////////
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {

    dispatch(getUserRequest())

    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        const user = response.data;
        console.log("user ", user)
        dispatch(getUserSuccess(user))

    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}


export const findUserById = (userId) => async (dispatch) => {
    try {
        const { data } = await api.get(`/api/users/${userId}`)
        console.log("founded user by id ", data)
        dispatch({ type: FIND_USER_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        console.log("error", error)
        dispatch({ type: FIND_USER_BY_ID_FAILURE, payload: error.message })
    }
}


export const updateUserProfile = (reqData) => async (dispatch) => {
    try {
        const { data } = await api.put(`/api/users/update`, reqData)
        console.log("updated user ", data)
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data })
    } catch (error) {
        console.log("error", error)
        dispatch({ type: UPDATE_USER_FAILURE, payload: error.message })
    }
}


export const followUserAction = (userId) => async (dispatch) => {
    try {
        const { data } = await api.put(`/api/users/${userId}/follow`)
        console.log("followed user ", data)
        dispatch({ type: FOLLOW_USER_SUCCESS, payload: data })
    } catch (error) {
        console.log("error", error)
        dispatch({ type: FOLLOW_USER_FAILURE, payload: error.message })
    }
}


export const logout = (token) => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT });
        localStorage.clear();
    };
};