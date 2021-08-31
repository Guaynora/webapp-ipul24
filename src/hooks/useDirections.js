import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

function useDirections() {
  const [directions, setDirections] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getDirections = async () => {
      let url = "http://localhost:1337/directions";
      try {
        let res = await fetch(url, {
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
        setDirections(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDirections();
  }, []);

  return { directions };
}

export default useDirections;
