import styles from "./InputTextAddon.module.scss";

function InputTextAddon({ variant, title, titleDesc }) {
  return (
    <>
      {variant == "response" && (
        <h6 className={styles.form_subtitle_resp}>{title}</h6>
      )}
      {variant == "create" && <h4 className={styles.form_subtitle}>{title}</h4>}
      <p className={styles.sublabel}>{titleDesc}</p>
    </>
  );
}
export default InputTextAddon;
