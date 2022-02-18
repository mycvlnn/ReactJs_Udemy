import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = {
  counter: 0,
  showToggle: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
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

export const { increase, decrement, increment, toggleCounter } =
  counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer, //Ngoài ra chúng ta cũng có thể truyền vào là object trong trường hợp chúng ta có nhiều hơn 1 reducer.
});

export default store;
