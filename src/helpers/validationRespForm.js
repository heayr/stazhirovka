import * as yup from "yup";
import { getResponseCookies } from "./responseVacancy";
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const schema = [
  yup.object().shape({
    //user_id: yup.boolean(),
    descResponse: yup.object().shape({
      last_name: yup
        .string()
        .required("Заполните поле")
        .max(150, "Максимальное количество символов 150"),
      first_name: yup
        .string()
        .required("Заполните поле")
        .max(150, "Максимальное количество символов 150"),
      middle_name: yup
        .string()
        //.required("Пожалуйста, заполните поле")
        .max(150, "Максимальное количество символов 150"),
      phone: yup.string().when([], () => {
        if (getResponseCookies("user_id")) {
          return yup
            .string()
            .min(11, "Некорректный формат")
            .max(12, "Некорректный формат")
            .matches(phoneRegExp, "Некорректный формат");
        } else {
          return yup
            .string()
            .required("Заполните поле")
            .min(11, "Некорректный формат")
            .max(12, "Некорректный формат")
            .matches(phoneRegExp, "Некорректный формат");
        }
      }),
      email: yup.string().when([], () => {
        if (getResponseCookies("user_id")) {
          return yup
            .string()
            .email("Некорректный формат")
            .max(150, "Максимальное количество символов 150");
        } else {
          return yup
            .string()
            .email("Некорректный формат")
            .max(150, "Максимальное количество символов 150")
            .required("Заполните поле");
        }
      }),
      city: yup
        .string()
        .required("Заполните поле")
        .max(150, "Максимальное количество символов 150"),
    }),
  }),
  yup.object().shape({
    paramContest: yup.object().shape({
      best_season: yup.string(),
      //.required("Пожалуйста, выберите один из вариантов"),
      best_status: yup.string(),
      // .required("Пожалуйста, выберите один из вариантов"),
    }),
  }),
];
