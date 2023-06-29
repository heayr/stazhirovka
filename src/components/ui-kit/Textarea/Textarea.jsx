import styles from "./Textarea.module.scss";
import { getIn } from "formik";

function Textarea({ formik, name }) {
  return (
    <textarea
      className={
        getIn(formik.touched, name) && getIn(formik.errors, name)
          ? styles.textarea_error
          : styles.textarea
      }
      rows="3"
      value={getIn(formik.values, name)}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    ></textarea>
  );
}
export default Textarea;
