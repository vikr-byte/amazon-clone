import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        className="home__image"
      />
      <div className="home__row">
        <Product
          id="123"
          title="this is a product"
          price={11.96}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7xp7NCFmbhK1tvdp1N38sOathaAHuFcVAvYhXA3VQOrQbJk&s"
        />
        <Product
          id="222"
          title="this is another product"
          price={20.36}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFXr-v8_f58xe7Jo9uevsEpak5OQF-qYLws7jnpACyNSloN7A&s"
        />
      </div>

      <div className="home__row">
        <Product
          id="12"
          title="this is a product"
          price={37.96}
          rating={3}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8_HCpwSmqacmxaSBUxJ4ZFQaKm-bzSP5S_rUorYybkgGl8s&s"
        />
        <Product
          id="13"
          title="this is a product"
          price={88.76}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0WnaKBMmbIx35d4yzUI-E8EX0tITsnDrxCbkm9Hjxx6QOR8&s"
        />
        <Product
          id="23"
          title="this is a product"
          price={96.41}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSL3l-i8U9ojj1AJU667htjUWD6dukUBApzO-NlFh7jPsUCE0&s"
        />
      </div>
      <div className="home__row">
        <Product
          id="677"
          title="this is a product"
          price={100.96}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmKIsob-ejKQ5aSvfgSB1Z3R_dMek2bJ-kPL4zo2MGJSVTJ5K&s"
        />
      </div>
    </div>
  );
}

export default Home;
