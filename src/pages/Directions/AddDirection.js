import FormDirection from "../../components/form/FormDirection";
import TopComponent from "../../components/navTop/TopComponent";

function AddDirection() {
  return (
    <section className="container">
      <TopComponent back={true} />
      <FormDirection />
    </section>
  );
}

export default AddDirection;
