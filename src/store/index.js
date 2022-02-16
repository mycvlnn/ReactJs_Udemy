import { createStore } from "redux";

const initState = {
  counter: 0,
  showToggle: true,
};

const reducer = (state = initState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showToggle: state.showToggle,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showToggle: state.showToggle,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showToggle: state.showToggle,
    };
  }
  if (action.type === "toggle") {
    return {
      showToggle: !state.showToggle,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
