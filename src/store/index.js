import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import uiReducer from "./reducers/uiSlice";

//Store Wide App State
const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
