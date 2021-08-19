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
      console.log(response);
      return response.json();
    })
    .then((data) => {
      setToken(data.jwt);
      console.log(data);
      history.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
}

export default AuthHelper;
