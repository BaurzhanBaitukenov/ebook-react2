import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { thunk } from "redux-thunk";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import adminOrderReducer from "./Admin/Order/Reducer";
import { userReducer } from "./User/Reducer";
import ReviewReducer from "./Review/Reducer";
import authReducer from "./Auth/Reducer";
import tweetReducer from "./Twit/Reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    products:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    adminOrder:adminOrderReducer,
    adminsProduct:customerProductReducer,
    user:userReducer,
    review:ReviewReducer,
    twit:tweetReducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))