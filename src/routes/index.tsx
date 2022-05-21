import { Switch } from "react-router-dom";
import { Cats } from "../pages/Cats";
import { Clientes } from "../pages/Clientes";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Login } from "../pages/Login/login";
import { Pets } from "../pages/Pets";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" isPrivate component={Dashboard} />
      <Route
        exact
        path="/dashboard/cliente/:idCliente"
        isPrivate
        component={Clientes}
      />
      <Route exact path="/dashboard/pets/:idPet" isPrivate component={Pets} />
      <Route exact path="/dashboard/cats/:idCat" isPrivate component={Cats} />
    </Switch>
  );
};
