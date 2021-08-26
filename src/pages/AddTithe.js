import { useState, useEffect, useContext } from "react";
import FormTithe from "../components/FormTithe";
import SubmitButton from "../components/SubmitButton";
import TopComponent from "../components/TopComponent";
import AuthContext from "../context/AuthContext";

function AddTithe() {
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

  return (
    <section className="container">
      <TopComponent back={true} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Agregar Diezmo</h3>
        <SubmitButton />
      </div>
      <div className="form-container p-6">
        <FormTithe data={members} />
      </div>
    </section>
  );
}

export default AddTithe;
