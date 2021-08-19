import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import AuthHelper from "../helpers/AuthHelper";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(AuthContext);
  let history = useHistory();

  const form = (e) => {
    e.preventDefault();
    console.log("click");
    AuthHelper(email, password, setToken, history);
  };

  return (
    <form className="loginForm" onSubmit={form}>
      <div className="field">
        <label className="label">Correo</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="ejemplo@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Contraseña</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success">Iniciar Sesion</button>
        </p>
      </div>
    </form>
  );
}

export default FormLogin;
