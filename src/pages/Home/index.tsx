import CarHeaderImg from "../../assets/images/car-header.png";
import { Button } from "../../components/Button";
import "./style.css";
export function Home() {
  return (
    <div className="cardContainer">
      <div className=" baseCard cardTop">
        <img src={CarHeaderImg} alt="Carro Amarelo" />
        <div className="cardContent">
          <h3>O carro perfeito para você</h3>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className=" baseCard cardBottom">
        <Button text="ver catálogo" link="/products" />
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
}
