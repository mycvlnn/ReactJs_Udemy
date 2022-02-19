import { cartActions } from "../reducers/cartSlice";
import { uiActions } from "../reducers/uiSlice";

const { addToCart, increaseQuantity } = cartActions;
const { toggleCart } = uiActions;

export { addToCart, increaseQuantity, toggleCart };
