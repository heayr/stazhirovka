import styles from "./ErrorSubmit.module.scss";

function ErrorSubmit({ error }) {
  return (
    <div className={styles.container}>
      <h4>{error}</h4>
      <p>Сервер не может обработать запрос. Пожалуйста, попробуйте еще раз.</p>
      <p>Приносим извинения за неудобства.</p>
    </div>
  );
}

export default ErrorSubmit;
