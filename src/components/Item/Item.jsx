import React from "react";
import { Link } from "react-router-dom";

//Recibir un objeto y devolverlo en forma de componente con esta plantilla
export const Item = ({ item }) => {
  return (
    <div
      className="card border border-secondary m-4 p-0"
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

        <Link
          className="nav-link btn btn-primary p-2 my-2 text-white"
          to={`/product/${item.id}`}
        >
          Ver Libro
        </Link>
      </div>
    </div>
  );
};
