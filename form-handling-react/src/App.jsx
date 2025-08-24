import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // lowercase file

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;
