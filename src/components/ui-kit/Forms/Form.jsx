import { getIn } from "formik";

import styles from "./Form.module.scss";
import { useEffect, useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import Input from "../Inputs/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import { OPTIONS_SEASON, OPTIONS_STATUS } from "@/constants/formRespConstants";

function Form({ formik, fields, typeForm, title, variant }) {
  const formattedName = (field) => `${typeForm}.${field}`;
  const touchFields = getIn(formik.touched, typeForm)
    ? Object.keys(getIn(formik.touched, typeForm)).length
    : 0;
  const [errorFieldName, setErrorFieldName] = useState("");

  useEffect(() => {
    if (Object.keys(formik.errors).length) {
      setErrorFieldName(
        fields
          .filter((el) =>
          getIn(formik.errors, typeForm)?
            Object.keys(getIn(formik.errors, typeForm)).includes(el.name):null
          )
          .map((item, i, arr) => {
            const tail = arr.length - 1 === i ? "" : ", ";
            return item.title + tail;
          })
      );
    }
  }, [formik.errors]);
  
  return (
    <>
      {variant === "create" && <h5 className={styles.form_title}>{title}</h5>}
      {fields.map(({ name, title, titleDesc, type }) => (
        <div className={styles.label_wrapper} key={name}>
          <InputGroup
            variant={variant}
            title={title}
            titleDesc={titleDesc}
            type={type}
          >
            {(type === "checkbox" || type === "text" || type === "number") && (
              <Input formik={formik} name={formattedName(name)} type={type} />
            )}
            {type === "select" && (
              <Select
                formik={formik}
                name={formattedName(name)}
                options={name === "best_season" ? OPTIONS_SEASON : OPTIONS_STATUS}
              />
            )}
            {type === "textarea" && (
              <Textarea formik={formik} name={formattedName(name)} />
            )}
          </InputGroup>
          {getIn(formik.touched, formattedName(name)) && (
            <p className={styles.error_name}>
              {getIn(formik.errors, formattedName(name))}
            </p>
          )}
        </div>
      ))}
      {!formik.isValid && touchFields === fields.length && (
        <div
          className={
            variant === "response"
              ? styles.error_field_grid
              : styles.error_field
          }
        >
          <div className={styles.alert}></div>
          <p>Не заполнены обязательные поля:{" "}
          {errorFieldName}</p>
        </div>
      )}
    </>
  );
}
export default Form;
