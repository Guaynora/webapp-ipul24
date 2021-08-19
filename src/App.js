import "./App.css";
import "bulma/css/bulma.min.css";
import { AuthProvider } from "./context/AuthContext";
import RoutLogin from "./routes/RoutLogin";

function App() {
  return (
    <>
      <AuthProvider>
        <RoutLogin />
      </AuthProvider>
    </>
  );
}

export default App;
