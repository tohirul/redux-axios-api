import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        {products.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
