import Card from "../UI/Layout/card";
import MealItem from "./mealItem";
import "./availableMeal.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealList = () =>
  DUMMY_MEALS.map((m) => (
    <MealItem
      key={m.id}
      id={m.id}
      name={m.name}
      description={m.description}
      price={m.price}
    />
  ));

const AvailableMeal = () => {
  return (
    <section className="meals">
      <Card>
        <ul>{MealList()}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
