import * as yup from "yup";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const schema = [
  yup.object().shape({
    descVacancy: yup.object().shape({
      company_name: yup
        .string()
        .required("Пожалуйста, заполните поле")
        .max(150, "Максимальное количество символов 150"),
      name: yup
        .string()
        .required("Пожалуйста, заполните поле")
        .max(150, "Максимальное количество символов 150"),
    }),
  }),
  yup.object().shape({
    detailsVacancy: yup.object().shape({
      requirements_experience: yup
        .string()
        .max(150, "Максимальное количество символов 150"),
      requirements_description: yup
        .string()
        //.required("Пожалуйста, заполните поле")
        .max(500, "Максимальное количество символов 500"),
      salary_from: yup
        .number()
        .max(9999999, "Пожалуйста, укажите корректное значение"),
      salary_to: yup.number().when("salary_from", (value) => {
        if (value > 0) {
          return yup
            .number()
            .min(
              yup.ref("salary_from"),
              'Значение должно быть больше чем "Заработная плата от"'
            )
            .max(9999999, "Пожалуйста, укажите корректное значение");
        } else {
          return yup
            .number()
            .max(9999999, "Пожалуйста, укажите корректное значение");
        }
      }),
      employment: yup.string().max(150, "Максимальное количество символов 150"),
      schedule: yup.string().max(150, "Максимальное количество символов 150"),
      other: yup.string().max(500, "Максимальное количество символов 500"),
      responsibilities: yup
        .string()
        .max(2000, "Максимальное количество символов 2000"),
      full_description: yup
        .string()
        .max(500, "Максимальное количество символов 500"),
      positions: yup
        .number("Пожалуйста, укажите числовое значение")
        .min(1, "Пожалуйста, укажите корректное значение")
        .max(100, "Пожалуйста, укажите корректное значение"),
    }),
  }),
  yup.object().shape({
    contacts: yup.object().shape({
      contact_name: yup
        .string()
        .required("Пожалуйста, заполните поле")
        .max(150, "Максимальное количество символов 150"),
      contact_company: yup
        .string()
        .max(150, "Максимальное количество символов 150"),
      contact_position: yup
        .string()
        .max(150, "Максимальное количество символов 150"),
      email: yup
        .string()
        .email("Пожалуйста, укажите корректную электронную почту")
        .max(150, "Максимальное количество символов 150")
        .required("Пожалуйста, заполните поле"),
      phone: yup
        .string()
        .min(11, "Пожалуйста, укажите корректный номер телефона")
        .max(12, "Пожалуйста, укажите корректный номер телефона")
        .matches(phoneRegExp, "Пожалуйста, укажите корректный номер телефона"),
      telegram: yup.string().max(150, "Максимальное количество символов 150"),

      whatsapp: yup.string().max(150, "Максимальное количество символов 150"),

      url: yup
        .string()
        .url(
          "Пожалуйста, укажите корректный адрес в формате: 'https://<адрес сайта>/<путь>/'"
        )
        .nullable()
        .max(200, "Максимальное количество символов 200"),
    }),
  }),
  yup.object().shape({
    services: yup.object().shape({
      posting: yup.boolean(),
      mailing: yup.boolean(),
      recruitment: yup.boolean(),
      payment: yup.boolean(),
      contactMe: yup.boolean(),
      comments: yup.string().max(500, "Максимальное количество символов 500"),
    }),
  }),
];
