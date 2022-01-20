import React from "react"
import AvailableMeals from "./AvailableMeals/AvailableMeails"
import MealsSummary from "./MealsSummary/MealsSummary"

export default function Meals() {
  return (
    <div>
      <MealsSummary />
      <AvailableMeals />
    </div>
  )
}
