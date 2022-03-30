import { useContext } from "react";
import { ProductContext } from "../context/Product-context";

export default () => {
  const { products, toggleFav } = useContext(ProductContext);

  return {
    products,
    toggleFav,
  };
};
