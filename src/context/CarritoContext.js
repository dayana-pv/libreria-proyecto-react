import { useState, createContext, useContext } from "react";

const CarritoContext = createContext();

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const isInCart = (id) => {
    return carrito.some((libro) => libro.id === id);
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const indice = carrito.findIndex((libro) => libro.id === item.id);
      const aux = [...carrito];
      aux[indice].quantity = quantity;
      setCarrito(aux);
    } else {
      const newItem = {
        ...item,
        quantity: quantity,
      };
      /*
      const aux = carrito
      aux.push(newItem)
      setCarrito(aux)
      */
      setCarrito([...carrito, newItem]);
    }
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((libro) => libro.id !== id));
  };

  const emptyCart = () => {
    setCarrito([]);
  };

  const getItemQuantity = () => {
    return carrito.reduce((acum, libro) => (acum += libro.quantity), 0);
  };

  const totalPrice = () => {
    return carrito.reduce(
      (acum, libro) => (acum += libro.quantity * libro.precio),
      0
    );
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addItem,
        removeItem,
        emptyCart,
        totalPrice,
        getItemQuantity,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};
