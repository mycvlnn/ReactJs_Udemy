import React from "react";
import { useStore } from "../hooks/use-store";
import "./Counter.css";
import CounterChildren from "./CounterChildren";

const Counter = () => {
  const [state] = useStore();

  console.log("counter-re-render");
  return <CounterChildren counter={state.counter} />;
};

export default Counter;
