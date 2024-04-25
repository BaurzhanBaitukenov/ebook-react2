import { api } from "../../config/config"
import { GET_ALL_TWEETS_FAILURE, GET_ALL_TWEETS_REQUEST, GET_USERS_TWEET_FAILURE, GET_USERS_TWEET_SUCCESS } from "./ActionType";

export const getAllTweets = () => async (dispatch) => {
    try {
        const {data} = await api.get("/api/twits");
        console.log("get all twits : ", data)
        dispatch({type:GET_ALL_TWEETS_REQUEST, payload:data})
    } catch (error) {
        console.log("catch error - ", error)
        dispatch({type:GET_ALL_TWEETS_FAILURE, payload:error.message})
    }
}


export const getUsersTweet = (userId) => async (dispatch) => {
    try {
        const {data} = await api.get(`/api/twits/user/${userId}`);
        console.log("get all twits : ", data)
        dispatch({type:GET_USERS_TWEET_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error - ", error)
        dispatch({type:GET_USERS_TWEET_FAILURE, payload:error.message})
    }
}