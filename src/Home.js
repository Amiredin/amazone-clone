import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123456"
          title="Lee Men's Performance Series Extreme Comfort Straight Fit Pant"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/711kR6-NffL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12235856"
          title="Vankyo MatrixPad Z1 7 inch Tablet, Android 8.1 Quad-Core Processor, IPS HD "
          price={150.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/810FU51bYfL._AC_UY218_.jpg"
        />
        <Product
          id="1287456"
          title="JBL Charge 4 - Waterproof Portable Bluetooth Speaker - Blackt"
          price={19.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71DW6JMyCWL._AC_SL1500_.jpg"
        />
        <Product
          id="1296876"
          title="Elecder i37 Kids Headphones Children  Kindle Airplane School Tablet Green/Purple"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41KVF5Qm1lL._AC_US160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="129656"
          title="TCL 50S425 50 inch 4K Smart LED Roku TV (2019)"
          price={200.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71tN5cFBvFL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
