//Consulto a mis productos de mi Base de datos y se los envio a ItemList
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      fetch("../json/productos.json")
        .then((response) => response.json())
        .then((productos) => {
          const productoFiltrados = productos
            .filter((prod) => prod.stock > 0)
            .filter((prod) => prod.categoria === category);
          setProductos(productoFiltrados);
        });
    } else {
      fetch("./json/productos.json")
        .then((response) => response.json())
        .then((productos) => {
          const productoFiltrados = productos.filter((prod) => prod.stock > 0);
          setProductos(productoFiltrados);
        });
    }
  }, [category]);

  return <div className="row">{<ItemList productos={productos} />}</div>;
};
