import { useCarritoContext } from "../../context/CarritoContext.js";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext();
  return (
    <>
      <Link to={"/cart"} className="nav-link">
        <button className="btn btn-primary">
          <i className="fas fa-shopping-cart fa-lg"></i>
          {getItemQuantity() > 0 && (
            <span className="cantCarrito">{getItemQuantity()}</span>
          )}
        </button>
      </Link>
    </>
  );
};
