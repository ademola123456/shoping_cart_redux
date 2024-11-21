import React from "react";
import { Link } from "react-router-dom";
import shopCart from "../img/shop-cart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

export default function Product(props) {
  const cart = useSelector(store => store.cart.items)
  console.log(cart);
  const { id, slug, name, price, img } = props.data;
  // console.log(id);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }));
  }
  return (
    <div className="product-card">
      <div className="img-wrap">
        <Link to={slug}>
          <img
            src={img}
            alt="product img"
          />
        </Link>
      </div>
      <div className="details">
        <p className="title">{name}</p>
        <p className="price">
          Price:
          <span>{price}</span>
        </p>
       
      </div>
      <div className="addTo-cart">
        <button className="btn btn-primary" onClick={handleAddToCart}>
          <img
            src={shopCart}
            alt="product img"
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
}