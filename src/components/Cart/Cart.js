import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { carts } = useSelector((state) => state.cart);

  let content = carts.map((cart) => {
    const { price, quantity, id } = cart;
    const total = quantity * price;
    return <CartItem key={id} item={{ ...cart, total }} />;
  });

  if (carts.length === 0) {
    content = <div className="centered">Cart is Empty!</div>;
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{content}</ul>
    </Card>
  );
};

export default Cart;
