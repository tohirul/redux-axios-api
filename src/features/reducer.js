import { combineReducers } from "@reduxjs/toolkit";
import {
  productReducer,
  selectedProductReducer,
} from "../redux/reducers/productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducer;
