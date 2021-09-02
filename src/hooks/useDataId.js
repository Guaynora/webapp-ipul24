import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

function useDataId(url, type, id) {
  const [data, setData] = useState([]);

  const { token } = useContext(AuthContext);

  const getData = async (url, type, id) => {
    try {
      let res = await fetch(`${url}/${type}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error({
          err: true,
          status: res.status,
          statusText: !res.status.Text ? "ocurrio un error" : res.statusText,
        });
      }
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(url, type, id);
    return () => {
      setData([]);
    };
  }, []);

  return { data, getData };
}

export default useDataId;
