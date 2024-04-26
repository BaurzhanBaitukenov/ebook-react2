import { api } from "../../config/config";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PRODUCT_QUANTITY_FAILURE, UPDATE_PRODUCT_QUANTITY_REQUEST, UPDATE_PRODUCT_QUANTITY_SUCCESS } from "./ActionType"

export const createPayment = (orderId) => async (dispatch) => {

    dispatch({type:CREATE_PAYMENT_REQUEST})
    try {
        const {data} = await api.post(
            `/api/payments/${orderId}`, 
            {}
        );

        if(data.payment_link_url) {
            window.location.href = data.payment_link_url;
        }

    } catch(error) {
        dispatch({type:CREATE_PAYMENT_FAILURE, payload:error.message})
    }
}


export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({type:UPDATE_PAYMENT_REQUEST})

    try {
        const {data} = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

        console.log("update payment : - ", data)

    } catch(error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE, payload:error.message})
    }
}


export const makePaymentAction=(plan)=>async(dispatch)=>{
    try {
        const {data} = await api.post(`/api/plan/subscribe/${plan}`);

        if(data.payment_link_url){
            window.location.href=data.payment_link_url;
          }
          console.log("data",data)
        
      } catch (error) {
        console.log("catch error ",error)
      }
}

export const verifiedAccountAction=(payment_link_id)=>async(dispatch)=>{
  try {
      const {data} = await api.get(`/api/plan/${payment_link_id}`);
console.log("verified account ",data)
      
    } catch (error) {
      console.log("catch error ",error)
    }
}