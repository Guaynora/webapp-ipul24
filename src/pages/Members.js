import { useEffect, useState, useContext } from "react";
import AddButton from "../components/AddButton";
import Table from "../components/Table";
import TopComponent from "../components/TopComponent";
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
    <section className="container">
      <TopComponent back={false} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Miembros</h3>
        <AddButton text="miembro" />
      </div>

      <div className="table-container p-6">
        <Table members={members} />
      </div>
    </section>
  );
}

export default Members;
