import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showToggle: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    //adding method
    increment(state) {
      //Điều này đã bị cấm trước đó khi chúng ta không dùng toolkit.
      //Nhưng đối với toolkit bên trong nó sử dụng một gói khác có tên là imgur. Nó sẽ phát hiện code như thế này và sẽ tự động  sao chép trạng thái hiện tại. Tạo một đối tượng state mới giữ tất cả trạng thái cũ mà chúng ta không chỉnh sửa và ghi đè lên trạng thái mà chúng ta đang chỉnh sửa một cách bất biến
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showToggle = !state.showToggle;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { increase, decrement, increment, toggleCounter } =
  counterSlice.actions;

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
