import { createSlice } from "@reduxjs/toolkit";

const initCartSlice = {
  carts: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState: initCartSlice,
  reducers: {
    addToCart(state, action) {
      console.log("action", action);
      const { payload } = action;
      const index = state.carts.findIndex((cart) => cart.id === payload.id);
      if (index !== -1) {
        state.carts[index].quantity += 1;
      } else {
        state.carts.push({ ...payload, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const { payload } = action;
      const { id, number } = payload;
      const index = state.carts.findIndex((cart) => cart.id === id);

      //in case minus
      if (number === -1) {
        if (state.carts[index].quantity === 1) {
          state.carts = state.carts.filter((cart) => cart.id !== id);
        } else {
          state.carts[index].quantity -= 1;
        }
      } else {
        state.carts[index].quantity += 1;
      }
    },
  },
});

export const cartActions = cartReducer.actions;

export default cartReducer.reducer;
