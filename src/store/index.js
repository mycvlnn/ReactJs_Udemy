import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import autReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: autReducer,
  },
});

export default store;
