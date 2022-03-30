import React, { useState } from "react";

export const ProductContext = React.createContext({
  products: [],
  toggleFav: (idProduct) => {},
});

export default (props) => {
  const [listProducts, setListProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavoriteHandler = (id) => {
    const updatedProducts = [...listProducts];

    const productIndex = updatedProducts.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
      const isFavoriteUpdate = !updatedProducts[productIndex].isFavorite;
      updatedProducts[productIndex].isFavorite = isFavoriteUpdate;

      setListProducts(updatedProducts);
    }
  };

  const value = {
    products: listProducts,
    toggleFav: toggleFavoriteHandler,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};
