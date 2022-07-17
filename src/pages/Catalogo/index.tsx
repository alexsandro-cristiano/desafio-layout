import './style.css'
import CarCardImg from "../../assets/images/car-card.png";
import { Button } from "../../components/Button";
import "./style.css";
export function Catalogo() {
  return (
    <div className="cardContainer">
      <div className=" baseCard cardTop">
        <img src={CarCardImg} alt="Carro Amarelo" />
        <div className="cardContent">
          <h3>O carro perfeito para você</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className=" baseCard cardBottom">
        <Button />
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
}
