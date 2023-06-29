import Button from "../../ui-kit/Buttons/Button";
import styles from "./VacancyForm.module.scss";
import { FormAPI } from "@/api/api";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";

function VacancyForm({
  isLoading,
  setIsLoading,
  setError,
  setResponse,
  setResponseVacancy,
  setIsEmpty,
  setLast,
  setPage,
  setCount
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    setIsLoading(true);
    setError("");
    setIsEmpty(false);
    setResponse([]);
    setPage(1)
    FormAPI.getRespVacancy(e, 0, 50, "created_on", "desc")
      .then((data) => { 
        setCount(data.length)
      })
    FormAPI.getVacancy(e.vacancy_id)
      .then((data) => {
        setResponseVacancy(data);
        FormAPI.getRespVacancy(e, 0, 5, "created_on", "desc")
          .then((data) => {
            // reset({
            //   vacancy_id: "",
            // });
            if (data.length === 5) {
              setLast(false);
            }
            setResponse(data);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsEmpty(true);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };
  return (
    <form className={styles.admin_form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.admin_title}>Поиск откликов по вакансии</h1>
      <div className={styles.wrapper}>
        <Input
          name={"vacancy_id"}
          register={register}
          errors={errors}
          title="Введите название или ID вакансии"
        />
        <Button
          type="submit"
          value={"Найти"}
          disabled={isLoading}
          style="base_admin"
        ></Button>
      </div>
    </form>
  );
}

export default VacancyForm;
