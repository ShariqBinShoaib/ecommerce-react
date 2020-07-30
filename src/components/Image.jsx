import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";

function Image({ img }) {
  const [hovered, setHovered] = useState(false);

  const { cartItems, toggleFavorite, addToCart, removeFromCart } = useContext(
    AppContext
  );

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const isInCart = cartItems.find((item) => item.id === img.id);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="
        text-white
        d-flex
        justify-content-center
        align-items-center
        col-lg-3
        col-md-4
        col-sm-6
        mb-2
      "
    >
      <img
        className={
          hovered || img.isFavorite || isInCart
            ? "blur img-fluid img-thumbnail"
            : "img-fluid img-thumbnail"
        }
        style={{ color: "#000000" }}
        src={img.url}
        alt=""
      />
      <div className="card-img-overlay d-flex justify-content-center align-items-center">
        <div className="cursor-pointer" onClick={() => toggleFavorite(img.id)}>
          {img.isFavorite ? (
            <i className="ri-heart-fill favorite ri-3x"></i>
          ) : (
            hovered && <i className="ri-heart-line favorite ri-3x"></i>
          )}
        </div>
        <div className="cursor-pointer">
          {isInCart ? (
            <i
              onClick={() => removeFromCart(img)}
              className="ri-shopping-cart-fill cart ri-3x"
            ></i>
          ) : (
            hovered && (
              <i
                onClick={() => addToCart(img)}
                className="ri-add-circle-line cart ri-3x"
              ></i>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Image;
