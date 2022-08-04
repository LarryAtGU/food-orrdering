import CartContext from "./cart-context";
import { useReducer } from "react";
import { Item, CartCon } from "./cart-context";

const defaultCartState: CartCon = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (
  state: CartCon,
  action: { type: string; item?: Item; id?: string }
) => {
  let newItems;
  let newTotalAmt;
  switch (action.type) {
    case "ADD":
      if (action.item === undefined) break; // this never should happened
      const newitm: Item = action.item;
      const findItm = state.items.find((itm) => itm.id === newitm.id);
      if (findItm === undefined) {
        newItems = state.items.concat(action.item);
      } else {
        newItems = state.items.map((it) =>
          it === findItm ? { ...it, amount: it.amount + newitm.amount } : it
        );
      }
      newTotalAmt = state.totalAmount + action.item.amount * action.item.price;
      return { items: newItems, totalAmount: newTotalAmt };
    case "REMOVE":
      const id = action.id as string;
      const itm = state.items.find((itm) => itm.id === id);
      if (itm === undefined) break;
      if (itm.amount === 1) {
        newItems = state.items.filter((itm) => itm.id !== id);
      } else {
        newItems = state.items.map((itm) =>
          itm.id !== id ? itm : { ...itm, amount: itm.amount - 1 }
        );
      }
      newTotalAmt = state.totalAmount - itm.price;
      return { items: newItems, totalAmount: newTotalAmt };
  }

  return state;
};

const CartContextProvier = (props: { children: any }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCart = (item: Item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvier;
