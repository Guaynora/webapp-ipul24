import { useEffect, useState, useContext } from "react";
import Table from "../components/Table";
import AuthContext from "../context/AuthContext";

function Members() {
  const [members, setMembers] = useState([]);
  const { token } = useContext(AuthContext);
  //let { data, isPending } = useMembers();

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

  return (
    <section className="members">
      <h3>Miembros</h3>
      <Table members={members} />
    </section>
  );
}

export default Members;
