import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

function useForm(initialForm) {
  const [form, setForm] = useState(initialForm);
  const [edit, setEdit] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const { token } = useContext(AuthContext);

  const controller = new AbortController();

  const urls = {
    member: "http://localhost:1337/members",
    tithe: "http://localhost:1337/tithes",
  };

  const urlsUpdate = {
    member: `http://localhost:1337/members/${form.id}`,
    tithe: `http://localhost:1337/tithes/${form.id}`,
  };

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log(form);

    const post = async (type) => {
      try {
        setLoading(true);
        let res = await fetch(urls[type], {
          method: "POST",
          headers,
          body: JSON.stringify(form),
          signal: controller.signal,
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
        setLoading(false);
      }
    };
    post(type);
  };

  const handleUpdate = (e, type) => {
    e.preventDefault();
    console.log(urlsUpdate[type]);
    const update = async (type) => {
      try {
        setLoading(true);
        let res = await fetch(urlsUpdate[type], {
          method: "PUT",
          headers,
          body: JSON.stringify(form),
          signal: controller.signal,
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
        setTimeout(() => setResponse(false), 3000);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    update(type);
  };

  const handleEdit = (info) => {
    setEdit(info);
  };

  useEffect(() => {
    console.log("useEffect useForm");
    if (edit.length !== 0) {
      setForm(edit);
    } else {
      setForm(initialForm);
    }
    return () => controller.abort();
  }, [edit]);

  return {
    form,
    handleChange,
    handleSubmit,
    handleUpdate,
    handleEdit,
    loading,
    response,
  };
}

export default useForm;
