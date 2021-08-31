import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

function useMembers() {
  const [members, setMembers] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    let url = "http://localhost:1337/members";
    const getData = async (url) => {
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
        setMembers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData(url);
  }, []);

  return { members };
}

export default useMembers;
