import { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Home() {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
