import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-02-Start--af484eea-e58d-4921-9dd6-ab26b7dd6152._CB428137687_QL85_V1_.jpg"
        alt=""
      />

      <Product
        id="12345"
        title="Lamborghini Urus Downpipes"
        price={2000}
        rating={5}
        image="https://soulpp.com/wp-content/uploads/2020/03/Soul-Performance-Products-Lamborghini-Urus-Sport-Catalytic-Converter-Downpipes-Product.jpg"
      />
    </div>
  );
}

export default Home;
