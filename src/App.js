import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, updateCarts } from "./store/actions/cart";

function App() {
  const dispatch = useDispatch();
  const { visibleCart, notification } = useSelector((state) => state.ui);
  console.log("notification", notification);
  const { carts, isChanged } = useSelector((state) => state.cart);
  console.log("carts", carts);

  useEffect(() => {
    if (isChanged) {
      dispatch(updateCarts(carts));
    }
  }, [dispatch, carts, isChanged]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

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
