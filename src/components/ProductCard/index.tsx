import "./style.css";
import CarCardImg from "../../assets/images/car-card.png";
import { Button } from "../Button";
export function ProductCard() {
  return (
    <div className="baseCard card">
      <div className="topCard">
        <img src={CarCardImg} />
      </div>
      <div className="bottomCard">
        <h6>Audi Supra TT</h6>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button text="comprar" link="/products"/>
      </div>
    </div>
  );
}
