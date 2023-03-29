import { useField } from "formik";
import "./formInput.css";

const FormikComponent = (props) => {
  const { label, errorMessage, touched, ...inputProps } = props;
  const [field, meta] = useField(props);
  //   console.log("field", field);
  //   console.log("meta", meta);
  return (
    <div className="form-input">
      <label htmlFor="">{label}</label>
      <input
        {...inputProps}
        {...field}
        className={`${meta.touched && meta.error && "input-error"}`}
      />
      <span>{meta.touched && meta.error} </span>
    </div>
  );
};

export default FormikComponent;
