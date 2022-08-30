import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductComponent from "./ProductComponent";
import { setProducts } from "./../redux/actions/productAction";

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

/* 
async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };
*/
