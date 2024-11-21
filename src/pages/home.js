import React from "react";
import { Products } from "../productList";
import Product from "../components/product";
// import modernWhite from "../img/white-round.png";

const Home = () => {
  return (
    <div className="row">
      <div className="container">
        {Products.map((product, key) => <Product key={key} data={product} />)}
      </div>
    </div>
  );
}
export default Home;