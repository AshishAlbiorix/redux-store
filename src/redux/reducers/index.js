import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,addToCartProduct } from "./productReducer";
const reducers = combineReducers({
    Allproducts:productReducer,
    SelectedProduct:selectedProductReducer,
    addToCartProduct:addToCartProduct
});
export default reducers;