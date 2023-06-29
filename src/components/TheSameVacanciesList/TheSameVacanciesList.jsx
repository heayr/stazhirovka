import { useEffect, useState } from "react";
import VacancyCard from "../ui-kit/VacancyCard/VacancyCard";
import styles from "./TheSameVacanciesList.module.scss";
import { FormAPI } from "@/api/api";
import Loader from "@/components/ui-kit/Loader/Loader";

function TheSameVacancyList({ company_id, setVacancy, setIsModal }) {
  const [vacancyList, setVacancyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    FormAPI.getVacancies(company_id)
      .then((data) => {
        const { items } = data;
        setIsLoading(false);
        setVacancyList(items);
      })
      .catch((err) => {
        setIsLoading(false);
        //setError(err.message);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.container}>
          <h2>Похожие вакансии</h2>
          <div className={styles.vanancy_list}>
            {vacancyList.map((vacancy) => (
              <VacancyCard
                key={vacancy.id}
                vacancy={vacancy}
                setVacancy={setVacancy}
                setIsModal={setIsModal}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default TheSameVacancyList;
