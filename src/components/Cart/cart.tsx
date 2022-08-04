import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/modal";
import CartItem from "./cart-item";
import "./cart.css";
type Prop = {
  onHideCart: () => void;
};

const Cart = (prop: Prop) => {
  const ctx = useContext(CartContext);

  const amt = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItem = ctx.items.length > 0;

  const handleDecreaseItem = (id: string) => {
    ctx.removeItem(id);
  };
  const handleIncreaseItem = (id: string, price: number, name: string) => {
    ctx.addItem({ id: id, price: price, amount: 1, name: name });
  };

  const cartItem = (
    <ul className="cart-items">
      {ctx.items.map((itm) => (
        <CartItem
          key={itm.id}
          name={itm.name}
          price={itm.price}
          amount={itm.amount}
          onAdd={handleIncreaseItem.bind(null, itm.id, itm.price, itm.name)}
          onRemove={handleDecreaseItem.bind(null, itm.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClickBackDrop={prop.onHideCart}>
      {cartItem}
      <div className="total">
        <span>Total Amount:</span> <span>{amt}</span>
      </div>
      <div className="actions">
        {hasItem && <button className="button">Order</button>}
        <button className="button--alt" onClick={prop.onHideCart}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
