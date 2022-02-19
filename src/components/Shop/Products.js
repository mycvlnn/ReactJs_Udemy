import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    name: "JavaScript",
    price: 100,
    description: "Very good",
  },
  {
    id: "p2",
    name: "PHP",
    price: 2000,
    description: "TOT",
  },
  {
    id: "p3",
    name: "Ruby",
    price: 1000,
    description: "Good job",
  },
];

const Products = (props) => {
  const products = DUMMY_DATA.map((product) => {
    const { price, name, id, description } = product;
    return (
      <ProductItem
        id={id}
        title={name}
        price={price}
        description={description}
        key={id}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
