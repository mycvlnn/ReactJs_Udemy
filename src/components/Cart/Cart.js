import { useContext, useEffect, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import useHttp from "../../hooks/use-http";
import { foodOrderApp } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const { sendRequest, status, error } = useHttp(foodOrderApp.postOrder);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    sendRequest({
      user: userData,
      orderItems: cartCtx.items,
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  let modalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  if (status === "pending") {
    modalContent = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "success") {
    modalContent = (
      <div>
        <h2>Sent order successfully</h2>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  if (error && status === "failed") {
    modalContent = (
      <div>
        <h2>{error}</h2>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (status === "success") {
      cartCtx.clearCartOrder();
    }
  });

  return <Modal onClose={props.onClose}>{modalContent}</Modal>;
};

export default Cart;
