import styles from "./InputSelectAddon.module.scss";

function InputSelectAddon({ variant, title, titleDesc }) {
  return (
    <div className={styles.label}>
      {variant == "response" && (
        <h5 className={styles.form_subtitle}>{title}</h5>
      )}
      {variant == "create" && <h4 className={styles.form_subtitle}>{title}</h4>}
      <h6 className={styles.sublabel_select}>{titleDesc}</h6>
      <p className={styles.select_subtitle}>Выберите варианты из списка</p>
    </div>
  );
}
export default InputSelectAddon;
