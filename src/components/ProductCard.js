import React from "react";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const { id, title, image, price, category } = props.product;
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta price">$ {price}</div>
        <div className="meta">{category}</div>
        <div className="meta">
          <Link to={`/product/${id}`}>details...</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
