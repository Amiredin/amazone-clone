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
        <Product
          id="122556"
          title="Smart Watch Compatible with iPhone and Android Phones, IP67 Waterproof, Fitness Tracker Watch with Pedometer Heart "
          price={34.96}
          rating={5}
          image="data:image/webp;base64,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"
        />
      </div>
      <div className="home__row">
        <Product
          id="12235856"
          title="Vankyo MatrixPad Z1 7 inch Tablet, Android 8.1 Oreo Go Edition, 32GB Storage, Quad-Core Processor, IPS HD "
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
          title="Elecder i37 Kids Headphones Children Girls Boys Teens Foldable Adjustable On Ear Headphones 3.5mm Jack Compatible iPad Cellphones Computer MP3/4 Kindle Airplane School Tablet Green/Purple"
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
