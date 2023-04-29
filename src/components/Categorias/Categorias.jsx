import { Link } from "react-router-dom";

export const Categorias = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item ">
        <Link className="nav-link" to={"/"}>
          <button className="btn btn-primary">
            <i className="fas fa-home fa-lg"></i>
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/category/terror"}>
          <button className="btn btn-primary">Terror</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to={"/category/romance"}>
          <button className="btn btn-primary">Romance</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/category/juego"}>
          <button className="btn btn-primary">Juego</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to={"/category/ficcion"}>
          <button className="btn btn-primary">Ficcion</button>
        </Link>
      </li>
    </ul>
  );
};
