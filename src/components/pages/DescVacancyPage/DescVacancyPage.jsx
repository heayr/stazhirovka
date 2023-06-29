import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FormAPI } from "@/api/api";
import ShortDesc from "../../ShortDesc/ShortDesc";
import FullDesc from "../../FullDesc/FullDesc";
import { useInView } from "react-intersection-observer";
import styles from "./DescVacancyPage.module.scss";
import ShortDescMini from "@/components/ShortDescMini/ShortDescMini";
import TheSameVacanciesList from "@/components/TheSameVacanciesList/TheSameVacanciesList";
import Loader from "@/components/ui-kit/Loader/Loader";

const DescVacancyPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vacancy, setVacancy] = useState(null);
  const [error, setError] = useState("");
  const [isIntersect, setIsIntersect] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    FormAPI.getVacancy(id)
      .then((data) => {
        setIsLoading(false);
        setVacancy(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.25,
  });
  useEffect(() => {
    if (entry) {
      if (!inView) {
        setIsIntersect(true);
      } else {
        setIsIntersect(false);
      }
    }
  }, [inView]);

  return error ? (
    <div>
      {error} <p>Данная вакансия не существует или находится в архиве</p>
    </div>
  ) : (
    <>
      {isLoading ? (
        <div className={styles.loader}>
        <Loader />
      </div>
      ) : (
        <main>
          <ShortDescMini
            vacancy={vacancy}
            isIntersect={isIntersect}
            isModal={isModal}
            setIsModal={setIsModal}
          />
          <div ref={ref}>
            <ShortDesc
              vacancy={vacancy}
              isModal={isModal}
              setIsModal={setIsModal}
            />
          </div>
          <FullDesc vacancy={vacancy} />
          <TheSameVacanciesList company_id={vacancy.company_id} setVacancy={setVacancy} setIsModal={setIsModal}/>
        </main>
      )}
    </>
  );
};

export default DescVacancyPage;
