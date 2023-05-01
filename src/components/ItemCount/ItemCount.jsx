import { useCount } from "../../hooks/useCount.js";

export const ItemCount = ({ ValInicial, min, max, onAdd }) => {
  const { count, minus, sum, reset } = useCount(ValInicial, min, max);

  return (
    <>
      <button className="btn btn-primary mx-2" onClick={minus}>
        -
      </button>
      {count}
      <button className="btn btn-primary mx-2" onClick={sum}>
        +
      </button>
      <button className="btn btn-primary mx-2 " onClick={reset}>
        Reset
      </button>
      <br />
      <button className="btn btn-light my-4 " onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </>
  );
};
