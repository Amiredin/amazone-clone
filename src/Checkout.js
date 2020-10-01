import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";

import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/DeveloperBlogs/AmazonDeveloperBlogs/legacy/am2._CB520201113_.png"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2> Your Shoppping Basket is Empty!!! </h2>
          </div>
        ) : (
          <div>
            <h2 classname="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__left">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
