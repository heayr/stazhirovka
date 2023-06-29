import styles from "./InputChexboxAddon.module.scss";

function InputChexboxAddon({ title }) {
  return (
    <>
      <h6 className={styles.form_subtitle_checkbox}>{title}</h6>
    </>
  );
}
export default InputChexboxAddon;
