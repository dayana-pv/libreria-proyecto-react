import React from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("../json/productos.json")
      .then((response) => response.json())
      .then((productos) => {
        const prod = productos.find((prod) => prod.id === parseInt(id));
        setItem(prod);
      });
  }, []);
  return (
    <div className="card mb-3 container itemDetail">
      <ItemDetail item={item} />
    </div>
  );
};