import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

function NavBar() {
  const { cartItems } = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 pt-0 pb-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React Ecommerce App
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              {cartItems.length === 0 ? (
                <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
              ) : (
                <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
