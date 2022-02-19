import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { showNotify } from "./store/actions";

//Flag ban đầu thì không gọi api
let initLoaded = true;

function App() {
  const dispatch = useDispatch();
  const { visibleCart, notification } = useSelector((state) => state.ui);
  console.log("notification", notification);
  const { carts } = useSelector((state) => state.cart);
  console.log("carts", carts);

  useEffect(() => {
    const sendCartRequest = async () => {
      dispatch(
        showNotify({
          status: "pending",
          title: "Sending...",
          message: "Sending ...",
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
    };

    if (initLoaded) {
      initLoaded = false;
      return;
    }

    sendCartRequest();
  }, [dispatch, carts]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {visibleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
