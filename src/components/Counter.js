import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrement,
  toggleCounter,
  increment,
} from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const { counter, showToggle } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decreseHandler = () => {
    dispatch(decrement());
  };

  const increaseHanlder = () => {
    dispatch(increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle && <div className={classes.value}>-- {counter} --</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div className={classes.actions}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decreseHandler}>Decrement</button>
        <button onClick={increaseHanlder}>Increse 10</button>
      </div>
    </main>
  );
};

export default Counter;
