import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Members from "../pages/Members";
import Tithe from "../pages/Tithe";
import Nav from "../components/nav/Nav";
import AddMember from "../pages/Members/AddMember";
import AddTithe from "../pages/Tithe/AddTithe";
import Info from "../pages/Info";
import Movements from "../pages/Movements/Index";
import AddMovements from "../pages/Movements/AddMovements";
import Concepts from "../pages/concepts";
import AddConcepts from "../pages/concepts/AddConcepts";
import Directions from "../pages/Directions";
import AddDirection from "../pages/Directions/AddDirection";

function AppRouter() {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/info/:type/:id" component={Info} />
          <Route
            exact
            path="/directions/adddirection"
            component={AddDirection}
          />
          <Route exact path="/directions" component={Directions} />
          <Route exact path="/concepts/addconcepts" component={AddConcepts} />
          <Route exact path="/concepts" component={Concepts} />
          <Route
            exact
            path="/movements/addmovements"
            component={AddMovements}
          />
          <Route exact path="/tithes/addtithe" component={AddTithe} />
          <Route exact path="/members/addmember" component={AddMember} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/movements" component={Movements} />
          <Route exact path="/tithe" component={Tithe} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
