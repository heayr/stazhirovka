import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FormAPI } from "@/api/api";
import Contacts from "@/components/Contacts/Contacts";
import { INIT_VACANCY } from "@/constants/vacancyConstants";
import Loader from "@/components/ui-kit/Loader/Loader";
import styles from "./ContactsPage.module.scss";

const ContactsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vacancy, setVacancy] = useState(INIT_VACANCY);
  const [error, setError] = useState("");
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
  return isLoading ? (
    <div className={styles.loader}>
      <Loader />
    </div>
  ) : error ? (
    <div>
      {error} <p>Данная вакансия не существует или находится в архиве</p>
    </div>
  ) : (
    <Contacts vacancy={vacancy} />
  );
};

export default ContactsPage;
