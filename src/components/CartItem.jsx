import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";

function CartItem({ item }) {
  const [hovered, setHovered] = useState(false);

  const { removeFromCart } = useContext(AppContext);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className="card col-lg-3 col-md-4 col-sm-4 m-2"
      style={{ width: "18rem" }}
    >
      <img className="card-img-top" src={item.url} alt="" />
      <div className="card-body d-flex flex-column align-items-end cursor-pointer">
        <div
          onClick={() => removeFromCart(item)}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {hovered ? (
            <i className="ri-delete-bin-fill ri-2x"></i>
          ) : (
            <i className="ri-delete-bin-line ri-2x"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
