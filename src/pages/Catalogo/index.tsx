import { Button } from "../../components/Button";
import { ProductCard } from "../../components/ProductCard";
import './style.css'
export function Catalogo() {
  return (
    <div className="container my-4 ">
      <div className="baseCard">
       <input type="text" placeholder="Digite sua busca" />
       <Button text="Buscar" link="#"/>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
