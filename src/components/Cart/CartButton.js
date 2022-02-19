import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/actions";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  const totalCart = carts.reduce((total, cart) => total + cart.quantity, 0);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCart}</span>
    </button>
  );
};

export default CartButton;
