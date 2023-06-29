import styles from "./VacanciesList.module.scss";
import { useInView } from "react-intersection-observer";
import { FormAPI } from "@/api/api";
import { useState, useEffect } from "react";
import Loader from "@/components/ui-kit/Loader/Loader";

function VacanciesList({
  response,
  variant,
  responseVacancy,
  setIsLoading,
  setResponse,
  setLast,
  last,
  page,
  setPage,
  query,
  isLoading,
}) {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  useEffect(() => {
    if (entry) {
      if (inView && !last) {
        setIsPageLoading(true);
        if (variant === "vacancy") {
          FormAPI.getRespVacancy(
            { vacancy_id: responseVacancy?.id },
            page,
            5,
            "created_on",
            "desc"
          )
            .then((data) => {
              // reset({
              //   vacancy_id: "",
              // });
              if (data.length < 5) {
                setLast(true);
              }
              setResponse([...response, ...data]);
              setPage(page + 1);
              setIsPageLoading(false);
            })
            .catch((err) => {
              setLast(true);
              setIsPageLoading(false);
            });
        } else {
          FormAPI.getRespVacancyByCandidate(
            query,
            page,
            5,
            "created_on",
            "desc"
          )
            .then((data) => {
              // reset({
              //   last_name: "",
              //   first_name: "",
              //   middle_name: "",
              //   phone: "",
              //   email: "",
              // });
              if (data.length < 5) {
                setLast(true);
              }
              setResponse([...response, ...data]);
              setPage(page + 1);
              setIsPageLoading(false);
            })
            .catch((err) => {
              setLast(true);
              setIsPageLoading(false);
            });
        }
      }
    }
  }, [inView]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>ФИО</th>
            <th>{variant === "vacancy" ? "Контакты" : "Работодатель"}</th>
            <th>
              {variant === "vacancy" ? "Населённый пункт" : "ID вакансии"}
            </th>
          </tr>
        </thead>
        <tbody>
          {response.map((row) => (
            <tr key={row.id}>
              <td>{row.created_on.slice(0, 10)}</td>
              <td>
                {row.data_response[0].first_name}
                <br />
                {row.data_response[0].last_name}{" "}
                {row.data_response[0].middle_name}
              </td>
              {variant === "vacancy" ? (
                <>
                  <td>
                    {row.data_response[0].phone}
                    <br />
                    {row.data_response[0].email}
                  </td>
                  <td>{row.data_response[0].city} </td>
                </>
              ) : (
                <>
                  <td>{row.company_name}</td>
                  <td>{row.vacancy_id}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div ref={ref} className={styles.intersect_zone}></div>
      {isPageLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default VacanciesList;
