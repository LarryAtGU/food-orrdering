import React from "react";

const CartContext = React.createContext({
  items: [] as Item[],
  totalAmount: 0,
  addItem: (item: Item) => {},
  removeItem: (id: string) => {},
});

export type CartCon = {
  items: Item[];
  totalAmount: number;
};
export type Item = {
  id: string;
  name: string;
  amount: number;
  price: number;
};

export default CartContext;
