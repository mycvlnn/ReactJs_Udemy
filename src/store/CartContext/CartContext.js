import React from "react"
export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (meal) => {},
  removeItem: (idMeal) => {},
})
