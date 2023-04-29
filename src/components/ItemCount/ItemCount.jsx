import { useCount } from "../../hooks/useCount.js";

export const ItemCount = ({ ValInicial, min, max, onAdd }) => {
  const { count, minus, sum, reset } = useCount(ValInicial, min, max);

  return (
    <>
      <button className="btn btn-primary" onClick={minus}>
        -
      </button>
      {count}
      <button className="btn btn-primary" onClick={sum}>
        +
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-light" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </>
  );
};
