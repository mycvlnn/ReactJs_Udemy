import { cartActions } from "../reducers/cartSlice";
import { uiActions } from "../reducers/uiSlice";

const { addToCart, increaseQuantity, fetchCarts } = cartActions;
const { toggleCart, showNotify, hideNotify } = uiActions;

export {
  addToCart,
  increaseQuantity,
  toggleCart,
  showNotify,
  fetchCarts,
  hideNotify,
};
