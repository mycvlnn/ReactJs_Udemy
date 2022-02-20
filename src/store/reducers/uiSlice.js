import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    visibleCart: false,
    notification: null,
  },
  reducers: {
    toggleCart(state) {
      state.visibleCart = !state.visibleCart;
    },
    showNotify(state, action) {
      const { status, title, message } = action.payload;
      console.log("payload", action.payload);
      state.notification = {
        status,
        title,
        message,
      };
    },
    hideNotify(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
