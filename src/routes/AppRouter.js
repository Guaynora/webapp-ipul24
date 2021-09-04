import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Members from "../pages/Members";
import Dashboard from "../pages/Dashboard";
import Tithe from "../pages/Tithe";
import Nav from "../components/nav/Nav";
import AddMember from "../pages/AddMember";
import AddTithe from "../pages/AddTithe";
import InfoMember from "../pages/InfoMember";

function AppRouter(params) {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/member/:id" component={InfoMember} />
          <Route exact path="/tithe/addtithe" component={AddTithe} />
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
