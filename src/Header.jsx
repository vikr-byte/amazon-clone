import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon " />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Hey User</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Check</span>
            <span className="header__optionLineTwo">Out</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
