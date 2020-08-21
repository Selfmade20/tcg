import React from "react";

function CheckoutProduct({ id, title, image, rating, price }) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />

      <div className="checkoutProduct__info">
  <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
