import { Switch } from "react-router-dom";
import { Clientes } from "../pages/Clientes";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Login } from "../pages/Login/login";
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
    </Switch>
  );
};
