
import React,{ useState, useEffect } from 'react';
import { Products } from "../productList";
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../store/cart';
export const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = Products.filter(product => product.id === productId)[0];
        setDetail(findDetail)
    }, [productId])
    const handleMinusQuality = () => {
        dispatch(
          changeQuantity({
            productId: productId,
            quantity: quantity - 1,
          })
        );
    }
    const handlePlusQuality = () => {
      dispatch(
        changeQuantity({
          productId: productId,
          quantity: quantity + 1,
        })
      );
    };
  return (
    <div className="d-flex cartItem-wrap">
      <img
        src={detail.img}
        alt=""
        className="w-12"
      />
      <h5>{detail.name}</h5>
      <p>${detail.price * quantity}</p>
      <div className="quantity-wrapper">
        <button
          className="quantity-btn"
          onClick={handleMinusQuality}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="quantity-btn"
          onClick={handlePlusQuality}
        >
          +
        </button>
      </div>
    </div>
  );
}
