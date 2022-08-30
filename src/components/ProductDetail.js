import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productAction";
import { useParams } from "react-router-dom";
import { removeSelectedProducts } from "./../redux/actions/productAction";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  // console.log(product);
  const dispatch = useDispatch();
  const { productId } = useParams();

  const fetchProductDetail = useCallback(async () => {
    const url = `https://fakestoreapi.com/products/${productId}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(selectedProducts(data)));
  }, [dispatch, productId]);

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => dispatch(removeSelectedProducts());
  }, [dispatch, fetchProductDetail, productId]);

  const { title, price, image, category, description } = product;

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">And</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img src={image} alt="" className="ui fluid image" />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a href="none" className="ui teal tag label">
                  ${price}
                </a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
