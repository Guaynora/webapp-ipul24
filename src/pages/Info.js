import { useParams } from "react-router";
import TopComponent from "../components/navTop/TopComponent";
import UpdateMember from "../components/form/UpdateMember";
import UpdateTithe from "../components/form/UpdateTithe";
import useDataId from "../hooks/useDataId";

function Info() {
  let { type, id } = useParams();
  console.log("useParams: ", useParams());
  let url = "http://localhost:1337";

  const { data } = useDataId(url, type, id);

  const typeInfo = () => {
    if (type === "members") {
      return <UpdateMember info={data} />;
    } else if (type === "tithes") {
      return <UpdateTithe info={data} />;
    }
  };

  return (
    <section className="container">
      <TopComponent back={true} />
      {typeInfo()}
    </section>
  );
}

export default Info;
