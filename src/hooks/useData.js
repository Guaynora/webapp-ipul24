import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

function useData(url) {
  const [data, setData] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async (url) => {
      try {
        let res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
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
    getData(url);
    return () => controller.abort();
  }, [data]);

  return { data };
}

export default useData;
