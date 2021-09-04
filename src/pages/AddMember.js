import FormMember from "../components/form/FormMember";
import TopComponent from "../components/navTop/TopComponent";

function AddMember() {
  return (
    <section className="container">
      <TopComponent back={true} />
      <FormMember />
    </section>
  );
}

export default AddMember;
