import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { foodOrderApp } from "../../lib/api";

const AvailableMeals = () => {
  const {
    sendRequest,
    status,
    data: meals,
    error,
  } = useHttp(foodOrderApp.getAllMeals, true);

  useEffect(() => {
    //call api load data
    sendRequest();
  }, [sendRequest]);

  let content;

  if (status === "pending") {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "success") {
    content = (
      <div className="centered">
        <h2>Meals Empty</h2>
      </div>
    );

    if (meals.length > 0) {
      content = meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ));
    }
  }

  if (error) {
    content = (
      <div className="centered">
        <h2>{content}</h2>
      </div>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
