import "./headercart.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/cartIcon";
type Prop = {
  onShowCart: () => void;
};

const HeaderCartButton = (prop: Prop) => {
  const ctx = useContext(CartContext);
  const cartNum = ctx.items.reduce((ret, itm) => ret + itm.amount, 0);
  const [bump, setBump] = useState(false);

  const bumpclass = bump ? "button bump" : "button";

  useEffect(() => {
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartNum]);

  return (
    <button className={bumpclass} onClick={prop.onShowCart}>
      <span className="icon">
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className="badge">{cartNum} </span>
    </button>
  );
};
export default HeaderCartButton;
