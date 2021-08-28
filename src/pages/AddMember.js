import { useState, useEffect, useContext } from "react";
import FormMember from "../components/FormMember";
import TopComponent from "../components/TopComponent";
import AuthContext from "../context/AuthContext";

function AddMember() {
  const [directions, setDirections] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    let url = "http://localhost:1337/directions";
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
        setDirections(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData(url);
  }, []);

  return (
    <section className="container">
      <TopComponent back={true} />
      <FormMember data={directions} />
    </section>
  );
}

export default AddMember;
