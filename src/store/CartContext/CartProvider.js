import React, { useReducer } from "react"
import { CartContext } from "./CartContext"

//combind reducer
const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state = defaultCartState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { payload } = action
      const updatedItems = state.items.concat(payload)
      const updatedTotalAmount =
        state.totalAmount + payload.amount * payload.price
      console.log(updatedTotalAmount)
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    case "REMOVE_ITEM": {
      return { ...state }
    }
    default:
      return state
  }
}

export default function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = (item) => {
    console.log(item)
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    })
  }
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}
