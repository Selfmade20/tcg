import React from "react";
import "./Ordered.css";
import { useHistory } from "react-router-dom";


function Ordered() {
    const history = useHistory();

    const routeChange = () => {
      let path = "/home";
      history.push(path);
    };

  return (
    <div className="successful__order">
      <h3>
        You order has been processed and we will send you an email confirming
        your order
      </h3>
      <button onClick={routeChange}>Back to shopping</button>
    </div>
  );
}

export default Ordered;
