import { cartActions } from "../reducers/cartSlice";
import { uiActions } from "../reducers/uiSlice";

const { addToCart, increaseQuantity } = cartActions;
const { toggleCart, showNotify } = uiActions;

export { addToCart, increaseQuantity, toggleCart, showNotify };
