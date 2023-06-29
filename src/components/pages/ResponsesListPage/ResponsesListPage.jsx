import VacancyCardAdmin from "@/components/ui-kit-admin/VacancyCardAdmin/VacancyCardAdmin";
import VacancyForm from "@/components/ui-kit-admin/VacancyForm/VacancyForm";
import VacanciesList from "@/components/ui-kit-admin/VacanciesList/VacanciesList";
import { useState } from "react";
import styles from "./ResponsesListPage.module.scss";
import Loader from "@/components/ui-kit/Loader/Loader";
import CandidateForm from "../../ui-kit-admin/CandidateForm/CandidateForm";

const ResponsesListPage = ({ variant }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState([]);
  const [responseVacancy, setResponseVacancy] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [last, setLast] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState({});
  const [count, setCount] = useState(0);
  return (
    <section className={styles.container}>
      {variant === "vacancy" ? (
        <VacancyForm
          variant={variant}
          isLoading={isLoading}
          setError={setError}
          setResponse={setResponse}
          setIsLoading={setIsLoading}
          setResponseVacancy={setResponseVacancy}
          setIsEmpty={setIsEmpty}
          setLast={setLast}
          setPage={setPage}
          setCount={setCount}
        />
      ) : (
        <CandidateForm
          variant={variant}
          isLoading={isLoading}
          setResponse={setResponse}
          setIsLoading={setIsLoading}
          setResponseVacancy={setResponseVacancy}
          setIsEmpty={setIsEmpty}
          setLast={setLast}
          setPage={setPage}
          setQuery={setQuery}
          setCount={setCount}
        />
      )}

      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {!isLoading && (
        <>
          {error ? (
            <div className={styles.error}>
              <p>Вакансия не найдена</p>
            </div>
          ) : (
            <>
              {responseVacancy || isEmpty || response.length ? (
                <>
                  {!isEmpty && (
                    <h3 className={styles.admin_h3}>Результат поиска :</h3>
                  )}
                  {
                    <VacancyCardAdmin
                      variant={variant}
                      response={response}
                      responseVacancy={responseVacancy}
                      isEmpty={isEmpty}
                      count={count}
                    />
                  }
                  {!isEmpty && (
                    <VacanciesList
                      variant={variant}
                      response={response}
                      responseVacancy={responseVacancy}
                      isEmpty={isEmpty}
                      setResponse={setResponse}
                      setIsLoading={setIsLoading}
                      setLast={setLast}
                      last={last}
                      page={page}
                      setPage={setPage}
                      query={query}
                      isLoading={isLoading}
                    />
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
};

export default ResponsesListPage;
