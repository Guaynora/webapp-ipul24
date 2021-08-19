import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Members from "../pages/Members";
import Dashboard from "../pages/Dashboard";
import Tithe from "../pages/Tithe";
import Nav from "../components/Nav";

function RoutMenu() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/members" component={Members} />
          <Route exact path="/dasboard" component={Dashboard} />
          <Route exact path="/tithe" component={Tithe} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default RoutMenu;
