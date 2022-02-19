import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    visibleCart: false,
  },
  reducers: {
    toggleCart(state) {
      state.visibleCart = !state.visibleCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
