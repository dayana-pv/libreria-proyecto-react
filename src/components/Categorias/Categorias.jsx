import { Link } from "react-router-dom";

export const Categorias = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item mx-5">
        <Link className="nav-link " to={"/"}>
          <i className="fas fa-home fa-lg"></i>
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link className="nav-link " to={"/category/terror"}>
          Terror
        </Link>
      </li>

      <li className="nav-item mx-2">
        <Link className="nav-link" to={"/category/misterio"}>
          Misterio
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link className="nav-link" to={"/category/novela"}>
          Novela
        </Link>
      </li>

      <li className="nav-item mx-2">
        <Link className="nav-link" to={"/category/ficcion"}>
          Ficción
        </Link>
      </li>
    </ul>
  );
};
