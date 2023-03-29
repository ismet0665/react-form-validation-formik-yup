
import FormInput from "./components/FormInput";
import { useFormik } from "formik";
import { inputSchema } from "./schemas";

const Formik1 = () => {
  // useFormik in values degeri var. initialValues degeri values e atadık.
  // formik in içindeki hazır methodlar.{ values, handleSubmit, handleBlur }
  // touched hangi input a dokunulduysa onu aktif edip hata msj varsa yazsın.

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: inputSchema, // errors hataları inputSchema da yazdıgımız hata msj larını alıyor hazır method.
    onSubmit, // onSubmit burda tanımlamazsak yukardaki func. çalışmıyor.
  });

  console.log(values);
  console.log(errors);
  console.log(isSubmitting); // isSubmitting bir boolean bir deger alır.

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  // console.log(errorMessage);
  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>

      {inputs.map((value) => (
        <FormInput
          key={value.id}
          onBlur={handleBlur}
          onChange={handleChange}
          {...value}
        />
      ))}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default Formik1;
