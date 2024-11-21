
import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../img/shop-cart.png";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";

export default function Header() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts])
  const handleOpenCartTab = () => {
    dispatch(toggleStatusTab());
  }
    return (
      <header className="header">
        <p className="logo">Ecommerce Project</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
          </ul>
        </nav>
        <div
          className="btn btn-light shopCart-btn"
          onClick={handleOpenCartTab}
        >
          <img
            src={iconCart}
            alt="shop-cart"
            className="cart-icon"
          />
          <span className="counter">{totalQuantity}</span>
        </div>
      </header>
    );
}