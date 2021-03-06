import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Catalogo } from "./pages/Catalogo";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Catalogo} />
      </Switch>
    </BrowserRouter>
  );
}