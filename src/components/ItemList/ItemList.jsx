import React from "react";
import { Item } from "../Item/Item.jsx";
import { ItemCart } from "../ItemCart/ItemCart";

export const ItemList = ({ libros, plantilla }) => {
  return (
    <>
      {plantilla === "Item"
        ? libros.map((libro) => <Item key={libro.id} item={libro} />)
        : libros.map((libro) => <ItemCart key={libro.id} item={libro} />)}
    </>
  );
};
