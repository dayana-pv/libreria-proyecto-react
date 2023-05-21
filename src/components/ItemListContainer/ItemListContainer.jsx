import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { getLibros } from "../../firebase/firebase.js";

export const ItemListContainer = () => {
  const [libros, setLibros] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getLibros().then((libros) => {
        const libroFiltrados = libros
          .filter((libro) => libro.stock > 0)
          .filter((libro) => libro.categoria === category);
        setLibros(libroFiltrados);
      });
    } else {
      getLibros().then((libros) => {
        const libroFiltrados = libros.filter((libro) => libro.stock > 0);
        setLibros(libroFiltrados);
      });
    }
  }, [category]);

  return (
    <div className="card-deck row mx-5 my-4">
      {<ItemList libros={libros} plantilla={"Item"} />}
    </div>
  );
};
