import { ReactComponent as MenuIcon } from "../../assets/images/menu-icon.svg";
import "./style.css";
import "bootstrap/js/src/collapse.js";
import { Link, NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <nav className="navbar-expand-md navbar navbar-dark">
      <div className="container-fluid wrapper">
        <Link to="/" className="logo">
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCarrosTop"
          aria-controls="navbarCarrosTop"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon />
        </button>
        <div className="collapse navbar-collapse" id="navbarCarrosTop">
          <ul className="navbar-nav offset-md-8 menu">
          <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active" exact>
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
