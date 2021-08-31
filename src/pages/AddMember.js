import FormMember from "../components/FormMember";
import TopComponent from "../components/TopComponent";

function AddMember() {
  return (
    <section className="container">
      <TopComponent back={true} />
      <FormMember />
    </section>
  );
}

export default AddMember;
