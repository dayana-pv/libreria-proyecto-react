import React from "react";
import { Item } from "../Item/Item.jsx";

//Recibir un array de productos y a cada uno de esos productos los voy a transformar en un componente dada una plantilla
export const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <Item key={producto.id} item={producto} />
      ))}
    </>
  );
};
