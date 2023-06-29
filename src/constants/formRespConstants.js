import { getResponseCookies } from "@/helpers/responseVacancy"

export const FIELDS = {
  descResponse: [
    { name: "last_name", title: "Фамилия", type: "text" },
    {
      name: "phone",
      title: "Телефон",
      type: "text",
    },
    {
      name: "first_name",
      title: "Имя",
      type: "text",
    },
    {
      name: "email",
      title: "E-mail",
      type: "text",
    },
    {
      name: "middle_name",
      title: "Отчество",
      type: "text",
    },


    {
      name: "city",
      title: "Населенный пункт, в котором проживаете",
      type: "text",
    },
  ],
  paramContest: [
    {
      name: "best_season",
      title: "Сезон участия в конкурсе “Лидеры России”",
      titleDesc: "в котором Вы добились максимальных результатов",
      type: "select",
    },
    {
      name: "best_status",
      title: "Статус участия в конкурсе “Лидеры России”",
      titleDesc: "Если вы финалист 1 - 2 сезона , то выберете “суперфиналист“",
      type: "select",
    },
  ],
};

export const INITIAL_VALUES = {
  descResponse: {
    last_name: getResponseCookies("last_name"),
    first_name: getResponseCookies("first_name"),
    middle_name: getResponseCookies("middle_name"),
    phone: getResponseCookies("phone"),
    email: getResponseCookies("email"),
    city: getResponseCookies("city"),
  },
  paramContest: {
    best_season: getResponseCookies("best_season"),
    best_status: getResponseCookies("best_status"),
  },
};

export const OPTIONS_SEASON = [
  "1 сезон",
  "2 сезон",
  "3 сезон",
  "4 сезон",
  "Не участвовал",
];

export const OPTIONS_STATUS = [
  "Победитель",
  "Суперфиналист",
  "Полуфиналист",
  "Победитель трека",
  "Финалист трека",
  "Не участвовал",
];
