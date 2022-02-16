import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showToggle = useSelector((state) => state.showToggle);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
    });
  };

  const incrementHandler = () => {
    dispatch({
      type: "increment",
    });
  };

  const decreseHandler = () => {
    dispatch({
      type: "decrement",
    });
  };

  const increaseHanlder = () => {
    dispatch({
      type: "increase",
      amount: 10,
    });
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
