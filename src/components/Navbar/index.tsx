import { ReactComponent as MenuIcon } from "../../assets/images/menu-icon.svg";
import "./style.css";
import "bootstrap/js/src/collapse.js";
export function Navbar() {
  return (
    <nav className="navbar-expand-md navbar navbar-dark">
      <div className="container-fluid">
        <a href="#" className="logo">
          <h4>Carros Top</h4>
        </a>
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
          <ul className="navbar-nav offset-md-2 menu">
            <li>
              <a href="link" className="active">Home</a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
