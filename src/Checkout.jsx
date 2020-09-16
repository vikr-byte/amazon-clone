import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import "./checkout.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="this is a image"
        />
        {basket.length === 0 ? (
          <div>
            <h2>your basket is empty</h2>
            <p>
              You have no items in our basket. To buy one ore more basket click
              on "Add to basket" next to the button
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__tittle">Your Shopping Basket</h2>
            {basket.map((item) => (
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
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
