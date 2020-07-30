import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleFavorite = (id) => {
    const updatedPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
    );
    console.log(updatedPhotos);
    setPhotos(updatedPhotos);
  };

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    console.log(cartItems);
  };

  const removeFromCart = (item) => {
    const filteredCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(filteredCartItems);
    console.log(filteredCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(
    () => {
      fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
        .then((res) => res.json())
        .then((data) => setPhotos(data))
        .catch((err) => console.log(err));
    },
    // eslint-disable-next-line
    []
  );
  return (
    <AppContext.Provider
      value={{
        photos,
        cartItems,
        toggleFavorite,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
