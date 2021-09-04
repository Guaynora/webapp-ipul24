import { useEffect } from "react";
import { useParams } from "react-router";
import TopComponent from "../components/TopComponent";
import UpdateMember from "../components/UpdateMember";
import useDataId from "../hooks/useDataId";

function InfoMember() {
  let { id } = useParams();

  let url = "http://localhost:1337";

  const { data } = useDataId(url, "members", id);

  return (
    <section className="container">
      <TopComponent back={true} />
      <UpdateMember info={data} />
    </section>
  );
}

export default InfoMember;