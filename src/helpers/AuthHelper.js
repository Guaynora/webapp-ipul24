const url = "http://localhost:1337/auth/local";

function AuthHelper(email, password, setToken, history) {
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
      return response.json();
    })
    .then((data) => {
      setToken(data.jwt);
      history.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
}

export default AuthHelper;
