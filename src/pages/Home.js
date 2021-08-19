import { useContext } from "react";
import { Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import AuthContext from "../context/AuthContext";

function Home() {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Nav />
    </div>
  );
}

export default Home;
