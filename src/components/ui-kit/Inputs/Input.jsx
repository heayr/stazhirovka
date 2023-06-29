import styles from "./Input.module.scss";
import { getIn } from "formik";

function Input({ formik, name, type }) {
  const className =
    type === "checkbox"
      ? styles.checkbox
      : getIn(formik.touched, name) && getIn(formik.errors, name)
      ? styles.input_error
      : styles.input;
  return (
    <input
      className={className}
      type={type}
      value={getIn(formik.values, name)}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      onWheel={(e) => e.target.blur()}
      placeholder={type === "text" ? "Введите текст" : "Введите число"}
    />
  );
}
export default Input;
