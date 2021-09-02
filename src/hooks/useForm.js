import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

function useForm(initialForm, postType) {
  const [form, setForm] = useState(initialForm);
  const [edit, setEdit] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const { token } = useContext(AuthContext);

  const urls = {
    member: "http://localhost:1337/members",
    tithe: "http://localhost:1337/tithes",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e, url) => {
    e.preventDefault();
    console.log(urls[url]);
    const post = async (url) => {
      try {
        setLoading(true);
        let res = await fetch(urls[url], {
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
        setTimeout(() => setResponse(false), 3000);
      } catch (error) {
        console.log(error);
      }
    };

    post(url);
  };

  const handleEdit = (info) => {
    setEdit(info);
  };

  useEffect(() => {
    console.log("useEffect useForm");
    if (edit.length !== 0) {
      console.log("se agrego edit", edit);
      setForm(edit);
      console.log("form", form);
    } else {
      console.log("se seteo el form");
      setForm(initialForm);
    }
  }, [edit]);

  return { form, handleChange, handleSubmit, handleEdit, loading, response };
}

export default useForm;
