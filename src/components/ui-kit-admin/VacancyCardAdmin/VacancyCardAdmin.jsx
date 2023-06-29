import { Link } from "react-router-dom";
import styles from "./VacancyCardAdmin.module.scss";

function VacancyCardAdmin({ variant, response, responseVacancy, isEmpty, count }) {
  const placeOfJob = "Москва";

  return (
    <>
      <>
        <div
          className={
            variant === "vacancy"
              ? styles.container
              : styles.container_candidate
          }
        >
          {variant === "vacancy" && (
            <div className={styles.vacancy_container}>
              <Link
                to={`/vacancies/${responseVacancy?.id}`}
                target="_blank"
                className={styles.link}
              />
              <div>
                <h6 className={styles.subtitle}>
                  {responseVacancy?.company_name}
                </h6>
                <h5 className={styles.title}>{responseVacancy?.name}</h5>
                <div className={styles.wrapper}>
                  <div className={styles.salaries}>
                    {responseVacancy?.salary_from ? (
                      <h6 className={styles.salary}>
                        от {responseVacancy?.salary_from / 1000} 000 ₽{" "}
                      </h6>
                    ) : (
                      <></>
                    )}
                    {responseVacancy?.salary_to ? (
                      <h6 className={styles.salary}>
                        до {responseVacancy?.salary_to / 1000} 000 ₽
                      </h6>
                    ) : (
                      <></>
                    )}
                  </div>
                  {!placeOfJob ? (
                    ""
                  ) : (
                    <>
                      <div className={styles.location}></div>
                      <h6 className={styles.salary}>{placeOfJob}</h6>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className={styles.quantaty_container}>
            <p className={styles.quantaty}>{isEmpty ? 0 : count}</p>
            <p className={styles.quantaty_p}>откликов найдено</p>
          </div>
        </div>
      </>
    </>
  );
}

export default VacancyCardAdmin;
