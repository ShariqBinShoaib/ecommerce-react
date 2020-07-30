import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import CartItem from "../CartItem";

const cost = 5.99;

function Cart() {
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, clearCart } = useContext(AppContext);

  const itemsCount = cartItems.length;
  const totalCost = cost * itemsCount;

  const placeOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      clearCart();
      console.log("Order placed successfully!");
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="row">
      <div className="row justify-content-center col-md-8">
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        {itemsCount < 1 && <h6>No items to show.</h6>}
      </div>
      <div className="col-md-4">
        <p>
          No. of Items: <strong>{cartItems.length}</strong>
        </p>
        <p>
          Total Cost:{" "}
          <strong>
            {totalCost.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </p>
        {itemsCount > 0 && (
          <button
            disabled={isLoading}
            onClick={placeOrder}
            className="btn btn-primary mb-4"
          >
            {isLoading ? "Ordering..." : "Place Order"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
