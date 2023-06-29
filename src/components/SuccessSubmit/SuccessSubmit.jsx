import styles from "./SuccessSubmit.module.scss";

function SuccessSubmit({ data }) {
  return (
    <div className={styles.container}>
      <p>Поздравляем! Ваша вакансия №{data.id} успешно размещена. </p>
    </div>
  );
}

export default SuccessSubmit;
