import "./mealItemForm.css";
import Input from "../UI/Layout/input";
import { FormEvent, useRef } from "react";
type Prop = { id: string; addToCart: (amt: number) => void };

const MealItemForm = (prop: Prop) => {
  const amountInputRef = useRef();
  const submitHundler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredAmount = parseInt(
      (amountInputRef as unknown as React.MutableRefObject<HTMLInputElement>)
        .current.value
    );
    prop.addToCart(enteredAmount);
  };

  return (
    <form className="form" onSubmit={submitHundler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + prop.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
