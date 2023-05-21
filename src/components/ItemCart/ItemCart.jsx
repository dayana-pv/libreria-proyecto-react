import React from "react";
import { useCarritoContext } from "../../context/CarritoContext";

export const ItemCart = ({ item }) => {
  const { removeItem } = useCarritoContext();
  return (
    <div className="card mb-3 mx-5 cardCart">
      <div className="row  g-0">
        <div className="col-md-4">
          <img
            src={item.imagen}
            className="img-fluid rounded-start"
            alt={`imagen de ${item.nombre}`}
          />
        </div>

        <div className="col-md-8 ">
          <div className="card-body mx-4">
            <h5 className="card-title">
              {item.nombre} {item.modelo}
            </h5>
            <p className="card-text">Cantidad: {item.quantity}</p>
            <p className="card-text">Precio Unitario: ${item.precio}</p>
            <p className="card-text">
              Subtotal: ${item.precio * item.quantity}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => removeItem(item.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
