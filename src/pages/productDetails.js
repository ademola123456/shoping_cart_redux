import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Products } from "../productList";
import shopCart from "../img/shop-cart.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
export default function Details() {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);

     const dispatch = useDispatch();
     const handleAddToCart = () => {
       dispatch(
         addToCart({
           productId: detail.id,
           quantity: quantity,
         })
       );
     };
    const handleAddToQuantity = () => {
        setQuantity(quantity + 1);
    };
    const handleMinusToQuantity = () => {
         setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    };
    useEffect(() => {
        const findDetail = Products.filter(product => product.slug === slug); 
        if (findDetail.length > 0) {
            setDetail(findDetail[0]);
        } else {
            window.location.href = "/";
        }
    },[slug])
    return (
      <div className="row">
        <div className="col-md-5 col-lx-5 d-flex ">
          <img
            src={detail.img}
            alt="product-detail"
            className="detail-image"
          />
        </div>
        <div className="col-md-6 product-detail">
          <h1>{detail.name}</h1>
          <p className="detail-price">
            <span>$</span>
            {detail.price}
          </p>
          <div className="quantity-wrapper">
            <button
              className="quantity-btn"
              onClick={handleMinusToQuantity}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="quantity-btn"
              onClick={handleAddToQuantity}
            >
              +
            </button>
          </div>
          <p className="desc">{detail.description}</p>
          <div className="addTo-cart">
            <button
              className="btn btn-primary"
              onClick={handleAddToCart}
            >
              <img
                src={shopCart}
                alt="product img"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}