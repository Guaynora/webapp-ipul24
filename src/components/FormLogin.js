import { useState } from "react";
import useLogin from "../hooks/useLogin";
import LoadingButton from "./LoadingButton";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleClick, error } = useLogin(email, password);
  console.log(error);

  return (
    <form className="loginForm" onSubmit={handleClick}>
      <div className="field">
        <label className="label">Correo</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-rounded"
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
            className="input is-rounded"
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
          {loading ? (
            <LoadingButton type="login" />
          ) : (
            <button className="button is-success is-rounded">
              Iniciar Sesion
            </button>
          )}
        </p>
      </div>
      {error && (
        <p className=" has-text-danger has-text-centered">
          Usuario o contraseña incorrecta
        </p>
      )}
    </form>
  );
}

export default FormLogin;
