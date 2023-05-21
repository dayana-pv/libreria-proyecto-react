import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext();
  return (
    <>
      {carrito.length === 0 ? (
        <>
          <br />
          <h1 className="text-center my-5">Carrito Vacio</h1>
          <br />
          <button className="btn btn-primary d-grid col-6 mx-auto p-4">
            <Link to={"/"} className="nav-link">
              Continuar comprando
            </Link>
          </button>
        </>
      ) : (
        <div className="container cartContainer ">
          <div className="row ">
            <div className="col-sm-9">
              {<ItemList libros={carrito} plantilla={"ItemCart"} />}
            </div>
            <div className="col-sm-3  ">
              <div className="cartButtons d-grid gap-2">
                <h3>Compra Total: </h3>
                <h4>${totalPrice()}</h4>
                <br />
                <button
                  className="btn btn-primary my-2 py-3 "
                  onClick={() => emptyCart()}
                >
                  Vaciar Carrito
                </button>
                <Link className="nav-link d-grid gap-2" to={"/"}>
                  <button className="btn btn-dark my-2 py-3 ">
                    Continuar Comprando
                  </button>
                </Link>
                <Link className="nav-link d-grid gap-2" to={"/checkout"}>
                  <button className="btn btn-secondary my-2 py-3 ">
                    Finalizar Compra
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
