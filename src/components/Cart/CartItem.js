import { useDispatch } from "react-redux";
import { increaseQuantity } from "../../store/actions";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const increaseCart = (number) => {
    console.log("number", number);
    dispatch(
      increaseQuantity({
        id,
        number,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={increaseCart.bind(null, -1)}>-</button>
          <button onClick={increaseCart.bind(null, 1)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
