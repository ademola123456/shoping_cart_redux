import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { CartItem } from "./cartItem";
import { toggleStatusTab } from "../store/cart";

export default function CartTab() {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  
   const dispatch = useDispatch();
 const handleOpenCartTab = () => {
   dispatch(toggleStatusTab());
 };
  return (
    <div className={`cart-tab ${statusTab === false ? "transform" : ""}`}>
      <h2 className="p-5 text-white">Shopping Cart</h2>
      <div className="p-2">
        {carts.map((item, key) => (
          <CartItem
            key={key}
            data={item}
          />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button
          className="bg-black text-white"
          onClick={handleOpenCartTab}
        >
          CLOSE
        </button>
        <button className="bg-orange text-white">CHECKOUT</button>
      </div>
    </div>
  );
}
