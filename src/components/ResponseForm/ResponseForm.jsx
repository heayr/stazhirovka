import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "@/components/ui-kit/Forms/Form";
import Button from "@/components/ui-kit/Buttons/Button";
import { FormAPI } from "@/api/api";
import {
  FIELDS as fields,
  INITIAL_VALUES as initialValues,
} from "@/constants/formRespConstants.js";
import styles from "./ResponseForm.module.scss";
import Loader from "@/components/ui-kit/Loader/Loader";
import { schema } from "@/helpers/validationRespForm";
import ErrorSubmit from "@/components/ErrorSubmit/ErrorSubmit";
import { setResponseCookies } from "@/helpers/responseVacancy";

const defaultValue = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

const ResponseForm = ({ vacancy, setIsModal }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [response, setResponse] = useState(null);
  const [errorSubmit, setErrorSubmit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const isThirdStep = activeStep === 2;
  const navigate = useNavigate();

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);
    if (isSecondStep) {
      postForm(formik.values);
    }
    actions.setTouched({});
  };

  const handleCloseOutside = () => {
    setIsModal(false);
  };

  async function postForm(values) {
    setIsLoading(true);
    setResponseCookies(values);
    const postData = {
      gp_project_id: defaultValue,
      gp_company_id: defaultValue,
      gp_user_id: defaultValue,
      vacancy_id: vacancy.id,
      data_response: [{
        city: values.descResponse.city,
        email: values.descResponse.email,
        first_name: values.descResponse.first_name,
        last_name: values.descResponse.last_name,
        middle_name: values.descResponse.middle_name,
        phone: values.descResponse.phone,
        best_season: values.paramContest.best_season,
        best_status: values.paramContest.best_status,
      }],
    };

    FormAPI.postRespVacancy(postData)
      .then((data) => {
        //redirect to Success
        navigate(`/contacts/${vacancy.id}`);
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
    <>
      <div className={styles.modal_container}>
        {!isSecondStep && (
          <>
            {/* пустой div для ровного рендреа контейнера, 
          чтобы он не прыгал влево-вправо из-за 
          рендера кнопки на втором шаге */}
            <div className={styles.empty_box}></div>
          </>
        )}
        {!isFirstStep && (
          <Button
            type={"button"}
            value={"Назад"}
            disabled={isFirstStep}
            onClick={() => setActiveStep(activeStep - 1)}
            style="backwards"
          ></Button>
        )}
        <div className={styles.modal_title_container}>
          <h5 className={styles.popupTitle}>
            Заполните форму ниже и мы покажем контакты работодателя
          </h5>
        </div>
        {/* //! button outside of component =====================================================*/}
        <Button
          type={"button"}
          onClick={handleCloseOutside}
          style="closeOutside"
        ></Button>
      </div>
      <div className={styles.form_container}>
        {!isThirdStep && (
          <form
            className={
              isSecondStep ? styles.main_form_second : styles.main_form
            }
            onSubmit={formik.handleSubmit}
          >
            {isFirstStep && (
              <Form
                formik={formik}
                fields={fields.descResponse}
                typeForm="descResponse"
                title=""
                variant="response"
              />
            )}
            {isSecondStep && (
              <Form
                formik={formik}
                typeForm="paramContest"
                fields={fields.paramContest}
                title=""
                variant="response"
              />
            )}
            {(isFirstStep || isSecondStep) && (
              <div
                className={
                  isFirstStep ? styles.grid_order : styles.container_btn
                }
              >
                <div>
                  <Button
                    type="submit"
                    value={!isSecondStep ? "Далее" : "Получить контакты"}
                    disabled={isSecondStep && (isLoading || !isAgree)}
                    style="base"
                  ></Button>
                  <div className={styles.step}>{activeStep + 1}/2</div>
                  {!isFirstStep && (
                    <div className={styles.agreement}>
                      <input
                        type="checkbox"
                        name="check"
                        id="check1"
                        className={styles.checkbox}
                        checked={isAgree}
                        onChange={() => setIsAgree(!isAgree)}
                      />
                      <label className={styles.label} htmlFor="check1">
                        Даю согласие на обработку персональных данных
                      </label>
                    </div>
                  )}
                </div>
              </div>
            )}
          </form>
        )}
        {isThirdStep && isLoading && <Loader />}
        {/* {isThirdStep && response && !isLoading && (
          <SuccessSubmit data={response} />
        )} */}
        {isThirdStep && errorSubmit && !isLoading && (
          <div>
            <ErrorSubmit error={errorSubmit} />
          </div>
        )}
      </div>
    </>
  );
};

export default ResponseForm;
