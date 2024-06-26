import { GET_ALL_ORDERS_REQUEST } from "../Order/ActionType"
import { DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    allProducts: [],

}
export const customerProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case GET_ALL_PRODUCTS_REQUEST:
        case UPDATE_PRODUCT_REQUEST:

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }
        case GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }
        case UPDATE_PRODUCT_SUCCESS:
            return {...state,loading: false,products: state.products.map((product) =>product._id === action.payload._id ? action.payload : product),}
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state, loading: false, error: null,
                deletedProduct: action.payload
            }
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case GET_ALL_PRODUCTS_FAILURE:
        case UPDATE_PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }

}