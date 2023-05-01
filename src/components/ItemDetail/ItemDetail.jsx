import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const onAdd = (contador) => {};
  return (
    <div className="row g-0 m-4">
      <div className="col-md-6">
        <img
          src={item.imagen}
          alt={`Imagen de ${item.nombre}`}
          className="img-fluid rounded-start"
        />
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">Autor: {item.autor}</p>
          <p className="card-text">Precio: ${item.precio}</p>
          <p className="card-text">Stock: {item.stock}</p>
          <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
