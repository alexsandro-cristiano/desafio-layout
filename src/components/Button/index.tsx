import { Link } from "react-router-dom";
import "./style.css";

type Props = {
  text:string;
  link:string;
}
export function Button(props:Props) {
  return (
    <Link to={props.link} className="btn btn-primary">
      {props.text}
    </Link>
  );
}
