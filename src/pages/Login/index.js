import FormLogin from "../../components/form/FormLogin";
import logo from "../../img/Logo.png";

function Login() {
  return (
    <div className="login">
      <div className="cardLogin">
        <img src={logo} alt="logo ipul 24" className="logoipul24" />
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
