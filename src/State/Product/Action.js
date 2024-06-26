import axios from "axios";

import {API_BASE_URL, api } from "../../config/config";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    genres,
    languages,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const { data } = await api.get(
      `/api/products?genre=${genres}&language=${languages}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log("product data ", data);
    dispatch({type: FIND_PRODUCTS_SUCCESS,payload: data,});
  } catch (error) {
    dispatch({type: FIND_PRODUCTS_FAILURE,payload:error.message});
  }
};



export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData
  console.log("product id ", productId)
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("data ", data)

    dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS,payload: data});
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,payload:error.message});
  }
};

export const createProduct=(product) => async(dispatch)=> {
  try {
    dispatch({type:CREATE_PRODUCT_REQUEST})

    const { data } = await api.post(
      `${API_BASE_URL}/api/admin/products/`,
      product
    );
    console.log("created products ", data)
    dispatch({
      type:CREATE_PRODUCT_SUCCESS,
      payload:data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,payload:error.message});
  }
}


export const deleteProduct=(productId) => async(dispatch)=> {
  try {
    dispatch({type:DELETE_PRODUCT_REQUEST})

    const {data}=await api.delete(`/api/admin/products/${productId}/delete`);

    console.log("delete product  ", data)
    dispatch({
      type:DELETE_PRODUCT_SUCCESS,
      payload:productId,
    })
  } catch (error) {
    dispatch({type: DELETE_PRODUCT_FAILURE,payload:error.message});
  }
}

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
  try {
    const { data } = await api.get("/api/admin/products/all");
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_PRODUCT_REQUEST' });

    const { data } = await api.put(
      `${API_BASE_URL}/api/admin/products/${product.productId}/update`,
      product
    );

    dispatch({
      type: 'UPDATE_PRODUCT_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'UPDATE_PRODUCT_FAILURE',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


