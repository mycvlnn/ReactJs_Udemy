import { fetchCarts, hideNotify, showNotify } from ".";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-advanced-c673c-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data || [];
    };
    try {
      const cartsData = await fetchData();
      dispatch(fetchCarts(cartsData));
    } catch (error) {
      dispatch(
        showNotify({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const updateCarts = (carts) => {
  return async (dispatch) => {
    dispatch(
      showNotify({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );
    try {
      const response = await fetch(
        "https://redux-advanced-c673c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(carts),
        }
      );
      if (!response.ok) {
        dispatch(
          showNotify({
            status: "error",
            title: "Sent request failed!",
            message: "Something went wrong!",
          })
        );
        return;
      }

      dispatch(
        showNotify({
          status: "success",
          title: "Successfully",
          message: "Sent request successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotify({
          status: "error",
          title: "Sent request failed!",
          message: error.response.data,
        })
      );
    }
    dispatch(hideNotify());
  };
};
