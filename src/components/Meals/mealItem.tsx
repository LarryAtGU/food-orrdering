import { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./mealItem.css";
import MealItemForm from "./mealItemForm";
type ItemType = {
  id: string;
  name: string;
  description: string;
  price: number;
};
const MealItem = (prop: ItemType) => {
  const price = `$${prop.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const handleAddToCart = (amt: number) => {
    ctx.addItem({
      id: prop.id,
      name: prop.name,
      price: prop.price,
      amount: amt,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{prop.name}</h3>
        <div className="description">{prop.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={prop.id} addToCart={handleAddToCart}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
