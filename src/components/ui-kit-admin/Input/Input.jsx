import styles from "./Input.module.scss";

function Input({ register, errors, title, name }) {
  //   const styleBtn = styles[`${style}`];
  return (
    <div>
      <p className={styles.admin_p}>{title}</p>
      <input
        name={name}
        type="text"
        id={`value`}
        className={styles.admin_input}
        placeholder="Введите текст"
        {...register(`${name}`)}
      />
      {errors.vacancy_id && errors.vacancy_id.type == "required" && (
        <p className={styles.error}>Пожалуйста, введите ID вакансии</p>
      )}
    </div>
  );
}

export default Input;
