import { useState } from "react";
import Button from "../../ui-kit/Buttons/Button";
import styles from "./CandidateForm.module.scss";
import { FormAPI } from "@/api/api";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";

const CandidateForm = ({
  isLoading,
  setIsLoading,
  setResponse,
  setIsEmpty,
  setLast,
  setPage,
  setQuery,
  setCount
}) => {
  const fields = [
    { title: "Фамилия", name: "last_name" },
    { title: "Имя", name: "first_name" },
    { title: "Отчество", name: "middle_name" },
    { title: "Телефон", name: "phone" },
    { title: "Email", name: "email" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    setIsLoading(true);
    setResponse([]);
    setIsEmpty(false);
    setPage(1)
    setQuery(e)
    FormAPI.getRespVacancyByCandidate(e, 0, 50, "created_on", "desc")
      .then((data) => { 
        setCount(data.length)
      })
    FormAPI.getRespVacancyByCandidate(e, 0, 5, "created_on", "desc")
      .then((data) => {
        // reset({
        //   last_name: "",
        //   first_name: "",
        //   middle_name: "",
        //   phone: "",
        //   email: "",
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
  };

  return (
    <form className={styles.admin_form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.admin_title}>Поиск откликов по вакансии</h1>
      <div className={styles.wrapper}>
        {fields.map((field) => (
          <Input
            register={register}
            errors={errors}
            title={field.title}
            name={field.name}
            key={field.name}
          />
        ))}
      </div>

      <Button
        type="submit"
        value={"Найти"}
        disabled={isLoading}
        style="base_admin"
      ></Button>
    </form>
  );
};

export default CandidateForm;
