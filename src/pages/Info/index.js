import { useParams } from "react-router";
import TopComponent from "../../components/navTop/TopComponent";
import UpdateMember from "../../components/form/UpdateMember";
import UpdateTithe from "../../components/form/UpdateTithe";
import UpdateDirection from "../../components/form/UpdateDirection";
import useDataId from "../../hooks/useDataId";

function Info() {
  let { type, id } = useParams();
  let url = process.env.REACT_APP_APIURL;

  const { data } = useDataId(url, type, id);
  console.log(data);

  const typeInfo = () => {
    if (type === "members") {
      return <UpdateMember info={data} />;
    } else if (type === "tithes") {
      return <UpdateTithe info={data} />;
    } else if (type === "directions") {
      return <UpdateDirection info={data} />;
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
