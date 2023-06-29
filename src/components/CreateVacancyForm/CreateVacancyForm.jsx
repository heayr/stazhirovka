import { useFormik } from "formik";
import { useState } from "react";

import Form from "@/components/ui-kit/Forms/Form";
import Button from "@/components/ui-kit/Buttons/Button";
import styles from "./CreateVacancyForm.module.scss";
import { FormAPI } from "@/api/api";
import {
  FIELDS as fields,
  INITIAL_VALUES as initialValues,
} from "@/constants/formConstants.js";
import { schema } from "@/helpers/validationForm";
import SuccessSubmit from "@/components/SuccessSubmit/SuccessSubmit";
import ErrorSubmit from "@/components/ErrorSubmit/ErrorSubmit";
import Loader from "@/components/ui-kit/Loader/Loader";

const defaultValue = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

const CreateVacancyForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [response, setResponse] = useState(null);
  const [errorSubmit, setErrorSubmit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const isThirdStep = activeStep === 2;
  const isForthStep = activeStep === 3;
  const isFifthStep = activeStep === 4;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);
    if (isForthStep) {
      postForm(formik.values);
    }
    actions.setTouched({});
  };

  async function postForm(values) {
    setIsLoading(true);
    const postData = {
      name: values.descVacancy.name,
      is_active: true,
      // где брать
      company_id: defaultValue,
      company_name: values.descVacancy.company_name,
      positions: values.detailsVacancy.positions || 0,
      requirements: [
        {
          experience: values.detailsVacancy.requirements_experience || 0,
          description: values.detailsVacancy.requirements_description,
        },
      ],
      conditions: [
        {
          schedule: values.detailsVacancy.schedule,
          employment: values.detailsVacancy.employment,
          other: "",
        },
      ],
      responsibilities: values.detailsVacancy.responsibilities,
      full_description: values.detailsVacancy.full_description,
      // где брать
      profession_id: defaultValue,
      salary_from: values.detailsVacancy.salary_from || 0,
      salary_to: values.detailsVacancy.salary_to || 0,
      contact_name: values.contacts.contact_name,
      contact_company: values.contacts.contact_company,
      contact_position: values.contacts.contact_position,
      contacts: [
        {
          type: "email",
          contact: values.contacts.email,
        },
        {
          type: "phone",
          contact: values.contacts.phone,
        },
        {
          type: "telegram",
          contact: values.contacts.telegram,
        },
        {
          type: "whatsapp",
          contact: values.contacts.whatsapp,
        },
      ],
      start_date: new Date(Date.now()).toISOString().slice(0, 10),
      end_date: new Date(Date.now()).toISOString().slice(0, 10),
      url: values.contacts.url || null,
      // добавить поле?
      region: "EMPTY",
      // где брать
      team_ids: [defaultValue],
      gp_project_id: defaultValue,
      gp_company_id: defaultValue,
      gp_user_id: defaultValue,
      skills: [
        {
          // где брать?
          skill_id: defaultValue,
          is_competence: true,
          skill_description:
            values.descVacancy.requirements_description || "EMPTY",
          desirability: "REQUIRED",
          level: "EMPTY",
          priority: 0,
        },
      ],
      comments: values.services.comments,
    };
    FormAPI.postVacancy(postData)
      .then((data) => {
        //redirect to Success
        setResponse(data);
        setIsLoading(false);
      })
      .catch((err) => {
        //redirect to Fail
        setErrorSubmit(err.message);
        setIsLoading(false);
      });
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: schema[activeStep],
  });

  return (
    <div className={styles.form_container}>
      {!isFifthStep && (
        <form
          className={isForthStep ? styles.main_form_flex : styles.main_form}
          onSubmit={formik.handleSubmit}
        >
          {isFirstStep && (
            <Form
              formik={formik}
              fields={fields.descVacancy}
              typeForm="descVacancy"
              title="Описание позиции"
              variant="create"
            />
          )}
          {isSecondStep && (
            <Form
              formik={formik}
              typeForm="detailsVacancy"
              fields={fields.detailsVacancy}
              title="Детали вакансии"
              variant="create"
            />
          )}
          {isThirdStep && (
            <Form
              formik={formik}
              typeForm="contacts"
              fields={fields.contacts}
              title="Контакты"
              variant="create"
            />
          )}
          {isForthStep && (
            <Form
              formik={formik}
              typeForm="services"
              fields={fields.services}
              title="Требуемые услуги агентства"
              variant="create"
            />
          )}
          {(isFirstStep || isSecondStep || isThirdStep || isForthStep) && (
            <div
              className={
                isFirstStep ? styles.container_btn_first : styles.container_btn
              }
            >
              {!isFirstStep && (
                <Button
                  type={"button"}
                  value={"Назад"}
                  disabled={isFirstStep}
                  onClick={() => setActiveStep(activeStep - 1)}
                  style="base"
                ></Button>
              )}
              <div className={styles.step}>{activeStep + 1} / 5</div>
              <Button
                type="submit"
                value={!isForthStep ? "Далее" : "Разместить"}
                disabled={isLoading}
                style="base"
              ></Button>
            </div>
          )}
        </form>
      )}
      {isFifthStep && isLoading && <Loader />}
      {isFifthStep && response && !isLoading && (
        <SuccessSubmit data={response} />
      )}
      {isFifthStep && errorSubmit && !isLoading && (
        <div>
          <ErrorSubmit error={errorSubmit} />
          <Button
            type={"button"}
            value={"Назад"}
            disabled={isFirstStep}
            onClick={() => setActiveStep(activeStep - 1)}
            style="base"
          ></Button>
        </div>
      )}
    </div>
  );
};

export default CreateVacancyForm;
