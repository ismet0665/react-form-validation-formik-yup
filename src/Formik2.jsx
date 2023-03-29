import { Form, Formik } from "formik";
import { inputSchema } from "./schemas";
import FormikComponent from "./components/FormikComponent";

const Formik2 = () => {
  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
    },
  ];
  // console.log(errorMessage);
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={inputSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => (
        resetForm(),
        setSubmitting(true),
        setTimeout(() => {
          setSubmitting(false);
        }, 3000)
      )}
    >
      {(props) => (
        <Form>
          <h1>Register</h1>
          {inputs.map((value) => (
            <FormikComponent key={value.id} {...value} />
          ))}
          <button type="submit" disabled={props.isSubmitting}>
            {props.isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {console.log(props)}
        </Form>
      )}
    </Formik>
  );
};

export default Formik2;

// {(props) =>  Formik in içindeki props da  errors: {…}, touched: {…}, status: undefined, isSubmitting: false, resetForm vs birçok hazır method var.
