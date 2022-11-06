import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function useLogin(email, password) {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const { setToken } = useContext(AuthContext);
  let history = useHistory();

  const url = `${process.env.REACT_APP_APIURL}/auth/local`;

  const Login = (url, email, password) => {
    setloading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    })
      .then((response) => {
        setloading(false);
        return response.ok ? response.json() : Promise.reject(response);
      })
      .then((data) => {
        setToken(data.jwt);
        history.push("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    Login(url, email, password);
  };

  return { loading, handleClick, error };
}

export default useLogin;
