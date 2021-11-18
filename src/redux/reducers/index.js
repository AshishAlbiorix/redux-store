import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,addToCartReducer } from "./productReducer";
const reducers = combineReducers({
  Allproducts: productReducer,
  SelectedProduct: selectedProductReducer,
  AddTOCart:addToCartReducer
});
export default reducers;
