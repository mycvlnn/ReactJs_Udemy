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
      const updatedTotalAmount =
        state.totalAmount + payload.amount * payload.price

      let updatedItems
      //Find index;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === payload.id
      )

      const existingCartItem = state.items[existingCartItemIndex]

      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + payload.amount,
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedCartItem
      } else {
        updatedItems = state.items.concat(payload)
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    case "REMOVE_ITEM": {
      const { payload } = action
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === payload
      )
      const existingCartItem = state.items[existingCartItemIndex]
      const updatedTotalAmount = state.totalAmount - existingCartItem.price

      let updatedItems

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== payload)
      } else {
        updatedItems = [...state.items]
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        }
        updatedItems[existingCartItemIndex] = updatedItem
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    default:
      return state
  }
}

export default function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    })
  }

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
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
