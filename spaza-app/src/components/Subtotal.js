import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../redux/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../redux/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const history = useHistory();

  const routeChange = () => {
    let path = "/login";
    history.push(path);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={routeChange}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
