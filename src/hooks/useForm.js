import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function useForm(initialForm, postType) {
  const urlMember = "http://localhost:1337/members";
  const urlTithe = "http://localhost:1337/tithes";
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const { token } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(token);
    console.log(form);
    console.log(JSON.stringify(form));
    const post = async (url) => {
      try {
        setLoading(true);
        let res = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        });
        if (!res.ok) {
          throw new Error({
            err: true,
            status: res.status,
            statusText: !res.status.Text ? "ocurrio un error" : res.statusText,
          });
        }
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() => setResponse(false), 5000);
      } catch (error) {
        console.log(error);
      }
    };

    post(urlMember);
  };

  return { form, handleChange, handleSubmit, loading, response };
}

export default useForm;
