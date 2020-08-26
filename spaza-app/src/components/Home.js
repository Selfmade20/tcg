import React from "react";
import "./Home.css";
import Product from "./Product";

function Home({history}) {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-02-Start--af484eea-e58d-4921-9dd6-ab26b7dd6152._CB428137687_QL85_V1_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Lamborghini Urus Downpipes"
          price={2000}
          rating={5}
          image="https://soulpp.com/wp-content/uploads/2020/03/Soul-Performance-Products-Lamborghini-Urus-Sport-Catalytic-Converter-Downpipes-Product.jpg"
        />
        <Product
          id="2"
          title="Playstation 5"
          price={180}
          rating={4}
          image="https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-06%2F65068ac0-acbf-11ea-b9fb-ee297695f454&client=amp-blogside-v2&signature=685370e53cbcbb00a28cd0d1b29be2585964ca57"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Rich Dad Poor Dad Limited Edition Book"
          price={80}
          rating={3}
          image="https://media.takealot.com/covers_isbn/9781612680194-pdpxl.jpg"
        />
        <Product
          id="4"
          title="Guiseppe Zanotti"
          price={588}
          rating={5}
          image="https://cdn-images.farfetch-contents.com/12/31/27/76/12312776_10873590_1000.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="5"
          title="iPhone 11 Pro Max"
          price={1300}
          rating={4}
          image="https://www.myistore.co.za/media/catalog/product/cache/1/image/1600x/9df78eab33525d08d6e5fb8d27136e95/e/5/e52vsyiq.jpeg"
        />
        <Product
          id="6"
          title="MacBook Pro"
          price={1700}
          rating={5}
          image="https://junkmailimages.blob.core.windows.net/large/4cfd864e0ccb492c956451f1dedd941d.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="Ciroc Red Berry 750ml"
          price={200}
          rating={3}
          image="https://cdn.shopify.com/s/files/1/2788/1238/products/Circo_Red_Berry_480x480.jpg?v=1542029472"
        />
        <Product
          id="8"
          title="Dolce and Gabbana Super King Sneakers"
          price={916}
          rating={5}
          image="https://cdn-images.farfetch-contents.com/13/59/98/66/13599866_21590287_480.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
