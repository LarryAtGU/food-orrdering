import "./meals.css";
import AvailableMeal from "./availableMeal";
import MealsSummary from "./mealsSummary";
import React from "react";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeal></AvailableMeal>
    </React.Fragment>
  );
};
export default Meals;
