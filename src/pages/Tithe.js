import { useState, useEffect, useContext } from "react";
import AddButton from "../components/button/AddButton";
import Table from "../components/table/Table";
import TopComponent from "../components/navTop/TopComponent";
import AuthContext from "../context/AuthContext";
import { Redirect } from "react-router-dom";

function Tithe() {
  const [thithes, setThithes] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    let url = "http://localhost:1337/tithes";
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
        setThithes(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData(url);
  }, []);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <section className="container">
      <TopComponent back={false} />
      <div className="title-button mx-6 mt-4">
        <h3 className="title is-4 m-0">Diezmos</h3>
        <AddButton text="diezmo" />
      </div>
      <div className="table-container p-6">
        <Table datas={thithes} type="tithe" />
      </div>
    </section>
  );
}

export default Tithe;
