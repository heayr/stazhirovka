import Button from "@/components/ui-kit/Buttons/Button";
import styles from "./VacancyCard.module.scss";

function VacancyCard({ vacancy, setIsModal, setVacancy}) {
  const handleClick = () => {
    setIsModal(true);
    setVacancy(vacancy);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card_right}>
        <div className={styles.main_content}>
          <div className={styles.tags}>
            <h6 className={styles.tag}>Новая вакансия</h6>
            <h6 className={styles.tag}>Полный рабочий день</h6>
            <h6 className={styles.tag}>Опыт от 2х лет</h6>
          </div>
          <h2 className={styles.title}>{vacancy?.name}</h2>
          <div className={styles.salaries}>
            {vacancy?.salary_from && (
              <h3 className={styles.salary}>
                от {vacancy?.salary_from / 1000} 000 ₽{" "}
              </h3>
            )}
            {vacancy?.salary_to && (
              <h3 className={styles.salary}>
                до {vacancy?.salary_to / 1000} 000 ₽
              </h3>
            )}
          </div>
        </div>
        <Button
          value="Откликнуться"
          style="base"
          onClick={handleClick}
        ></Button>
      </div>
    </div>
  );
}

export default VacancyCard;
