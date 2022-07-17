import { Link } from "react-router-dom";
import "./style.css";
export function Button() {
  return (
    <Link to="/products" className="btn btn-primary">
      ver catálogo
    </Link>
  );
}
