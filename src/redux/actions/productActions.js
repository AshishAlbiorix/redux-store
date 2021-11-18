import { ActionTypes } from "../constants/action-type"

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectProducts = (products) => {
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products
    }
}
export const removeSelectProducts = () => {
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
}


export const addToCart = (product) =>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product
    }
}
export const removeFromCart = (product) =>{
    return {
        type:ActionTypes.REMOVE_FROM_CART,
        payload:product
    }
}