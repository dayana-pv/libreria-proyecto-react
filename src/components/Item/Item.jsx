import React from "react";
import { Link } from "react-router-dom";

//Recibir un objeto y devolverlo en forma de componente con esta plantilla
export const Item = ({ item }) => {
  console.log(item);
  return (
    <div
      className="card border border-secondary m-4"
      style={{ width: "21rem" }}
    >
      <img
        src={item.imagen}
        className="card-img-top"
        alt={`imagen de ${item.nombre}`}
      />
      <div className="card-body">
        <h5 className="card-title">
          {item.nombre} {item.modelo}
        </h5>
        <p className="card-text my-1">Autor: {item.autor}</p>
        <p className="card-text my-1">Precio: ${item.precio}</p>
        <p className="card-text my-1">Stock: {item.stock}</p>

        <Link className="nav-link" to={`/product/${item.id}`}>
          <button className="btn btn-primary">Ver Producto</button>
        </Link>
      </div>
    </div>
  );
};
