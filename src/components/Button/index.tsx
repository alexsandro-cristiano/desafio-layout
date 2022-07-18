import { Link } from "react-router-dom";
import "./style.css";
export function Button(prop:any) {
  return (
    <Link to="/products" className="btn btn-primary">
      {prop.propriedade}
    </Link>
  );
}
