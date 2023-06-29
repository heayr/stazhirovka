import styles from "./Select.module.scss";
import { getIn } from "formik";
import { useState } from "react";

function Select({ formik, name, options }) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  return (
    <div
      className={styles.custom_dropdown}
      onClick={(e) => setIsDropDownVisible(!isDropDownVisible)}
    >
      <div className={styles.select_container}>
        {isDropDownVisible === true && (
          <div
            className={
              getIn(formik.touched, name) && getIn(formik.errors, name)
                ? styles.input_error
                : styles.select
            }
            value={getIn(formik.values, name)}
            name={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {options.map((el, value) => (
              <div
                className={styles.options}
                key={el}
                onClick={() => formik.setFieldValue(`${name}`,el)}
              >
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={
          isDropDownVisible ? styles.selected_visible : styles.selected
        }
      >
        {getIn(formik.values, name) !== ""
          ? getIn(formik.values, name)
          : "Выберите вариант из списка"}
      </div>
    </div>
  );
}
export default Select;
