import React from "react";
import { useStore } from "../hooks/use-store";

function CounterChildren(props) {
  const dispatch = useStore(false)[1];
  console.log("re-render Counter children");
  return (
    <div className="counter">
      <p>Only there to proof, that you can have multiple state slices.</p>
      <p>Counter: {props.counter}</p>
      <button onClick={() => dispatch("ADD", 1)}>Add 1</button>
      <button onClick={() => dispatch("ADD", 5)}>Add 5</button>
      <button onClick={() => dispatch("SUB", 1)}>Subtract 1</button>
      <button onClick={() => dispatch("SUB", 5)}>Subtract 5</button>
    </div>
  );
}

export default React.memo(CounterChildren);
