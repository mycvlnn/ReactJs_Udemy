import { initStore } from "./use-store";

const configStore = () => {
  const actions = {
    ADD: (currState, number) => {
      const updatedCounter = currState.counter + number;

      return {
        counter: updatedCounter,
      };
    },
    SUB: (currState, number) => {
      console.log("running...");
      const updatedCounter = currState.counter - number;

      return {
        counter: updatedCounter,
      };
    },
  };

  initStore(actions, {
    counter: 0,
  });
};

export default configStore;
