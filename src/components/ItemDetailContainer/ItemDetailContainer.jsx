import React from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLibro } from "../../firebase/firebase.js";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getLibro(id).then((libro) => {
      //const libro = libros.find((libro) => libro.id === parseInt(id));
      setItem(libro);
    });
  }, [id]);

  return (
    <div className="card my-5 mx-6 container itemDetail">
      <ItemDetail item={item} />
    </div>
  );
};
