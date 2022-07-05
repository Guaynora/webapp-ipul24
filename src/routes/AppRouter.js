import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Members from "../pages/Members";
import Tithe from "../pages/Tithe";
import Nav from "../components/nav/Nav";
import AddMember from "../pages/Members/AddMember";
import AddTithe from "../pages/Tithe/AddTithe";
import AddOffering from "../pages/Offering/AddOffering"
import Info from "../pages/Info";
import Offering from "../pages/Offering";

function AppRouter() {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/info/:type/:id" component={Info} />
          <Route exact path="/tithes/addtithe" component={AddTithe} />
          <Route exact path="/offering/addoffering" component={AddOffering} />
          <Route exact path="/members/addmember" component={AddMember} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/tithe" component={Tithe} />
          <Route exact path="/offering" component={Offering} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
