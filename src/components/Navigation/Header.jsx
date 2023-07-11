import React, { useContext, useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import { auth } from "../../firebase";
import Search from "./Search";
import { ProductsContext } from "../../Context/ProductsContext";

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  function handleAuthentication() {
    if (auth) {
      auth.signOut();
    }
  }

  const { product } = useContext(ProductsContext);
  let titles = [];
  {
    product.map((item) => {
      return titles.push(item.title);
    });
  }

  const [products, setProducts] = useState(titles);
  const [searchQuery, setSeachQuery] = useState("");

  function handleClick() {
    if (searchQuery === "") {
      setSeachQuery("");
      return;
    }
    const filterBySearch = titles.filter((item) => {
      if (item.toLowerCase().includes(searchQuery.toLowerCase())) {
        return item;
      }
    });
    setProducts(filterBySearch);
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="flex flex-1 justify-end">
        <div className="header__search relative hidden md:flex">
          <input
            className="header__searchInput rounded-l-md"
            type="text"
            onChange={(e) => setSeachQuery(e.target.value)}
          />
          <SearchIcon
            className="bg-yellow-400  hover:bg-yellow-500 active:bg-yellow-700 cursor-pointer header__searchIcon rounded-r-md"
            onClick={handleClick}
          />
        </div>

        <div onClick={handleAuthentication} className="header__nav">
          <Link to={!user && "/login"}>
            <div className="header__option text-sm md:text-xs md:text-white">
              <span className="header__optionLineOne">
                Hello, {user ? user?.email : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <div className="hidden lg:inline-flex header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">&Orders</span>
          </div>

          <div className="header__option hidden md:inline-flex">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>

        <div className="header__cart">
          <Link to={"/shopping_cart"}>
            <ShoppingCartCheckoutIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
