import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18e50211-87df-48d9-92c7-c572d8c74708/dbyz0iv-3b45d618-230b-40f1-b804-15b8cb6532c9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMThlNTAyMTEtODdkZi00OGQ5LTkyYzctYzU3MmQ4Yzc0NzA4XC9kYnl6MGl2LTNiNDVkNjE4LTIzMGItNDBmMS1iODA0LTE1YjhjYjY1MzJjOS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7PCSCGwoy2cQmpTyYMkq2iG0tlr07Ac8KsLXCD-bx_M"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Tebogo</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
