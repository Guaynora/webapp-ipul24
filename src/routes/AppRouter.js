import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Members from "../pages/Members";
import Dashboard from "../pages/Dashboard";
import Tithe from "../pages/Tithe";
import Nav from "../components/Nav";
import AddMember from "../pages/AddMember";

function AppRouter(params) {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/members/addmember" component={AddMember} />
          <Route exact path="/dasboard" component={Dashboard} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/tithe" component={Tithe} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
