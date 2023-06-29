export const FIELDS = {
  descVacancy: [
    { name: "company_name", title: "Организация", type: "text" },
    {
      name: "name",
      title: "Название позиции",
      titleDesc: "Например: Начальник отдела департамента кадров",
      type: "text",
    },
  ],
  detailsVacancy: [
    {
      name: "requirements_experience",
      title: "Минимальный стаж",
      titleDesc: "необязательно",
      type: "text",
    },
    {
      name: "requirements_description",
      title: "Необходимые знания и умения",
      titleDesc: "необязательно",
      type: "textarea",
    },
    {
      name: "salary_from",
      title: "Заработная плата от",
      titleDesc: "(тыс., с налогами):",
      type: "number",
    },
    {
      name: "salary_to",
      title: "Заработная плата до",
      titleDesc: "(тыс., с налогами)",
      type: "number",
    },
    {
      name: "employment",
      title: "Занятость",
      titleDesc: "необязательно",
      type: "text",
    },
    {
      name: "schedule",
      title: "График работы",
      titleDesc: "необязательно",
      type: "text",
    },
    {
      name: "other",
      title: "Другие условия работы",
      titleDesc: "необязательно",
      type: "textarea",
    },
    {
      name: "responsibilities",
      title: "Ключевые обязанности позиции",
      titleDesc: "необязательно",
      type: "textarea",
    },
    {
      name: "full_description",
      title: "Дополнительная информация",
      titleDesc:
        "любая другая информация: особенности позиции, информация о компании, «соцпакет» и др.",
      type: "textarea",
    },
    {
      name: "positions",
      title: "Количество необходимых человек",
      titleDesc: "необязательно",
      type: "number",
    },
  ],
  contacts: [
    { name: "contact_name", title: "Контактное лицо", type: "text" },
    {
      name: "contact_company",
      title: "Название компании",
      titleDesc: "необязательно",
      type: "text",
    },
    {
      name: "contact_position",
      title: "Должность",
      titleDesc: "необязательно",
      type: "text",
    },
    { name: "email", title: "Электронная почта", type: "text" },
    {
      name: "phone",
      title: "Телефон",
      titleDesc: "необязательно",
      type: "text",
    },
    {
      name: "telegram",
      title: "Телеграм",
      titleDesc: "необязательно",
      type: "text",
    },
    {
      name: "whatsapp",
      title: "Whatsapp",
      titleDesc: "необязательно",
      type: "text",
    },
    {
      name: "url",
      title: "Адрес с описанием вакансии",
      titleDesc: "если есть",
      type: "text",
    },
  ],
  services: [
    { name: "posting", title: "Размещение вакансии", type: "checkbox" },
    { name: "mailing", title: "Рассылка по базе кандидатов", type: "checkbox" },
    { name: "recruitment", title: "Подбор кандидатов", type: "checkbox" },
    { name: "payment", title: "Готовы оплачивать услуги", type: "checkbox" },
    { name: "contactMe", title: "Свяжитесь со мной", type: "checkbox" },
    {
      name: "comments",
      title: "Комментарии к заявке",
      titleDesc: "что ещё нам нужно знать о вакансии?",
      type: "textarea",
    },
  ],
};

export const INITIAL_VALUES = {
  descVacancy: {
    company_name: "",
    name: "",
  },
  detailsVacancy: {
    requirements_experience: "",
    requirements_description: "",
    salary_from: "",
    salary_to: "",
    employment: "",
    schedule: "",
    other: "",
    responsibilities: "",
    full_description: "",
    positions: "",
  },
  contacts: {
    contact_name: "",
    contact_company: "",
    contact_position: "",
    email: "",
    phone: "",
    telegram: "",
    whatsapp: "",
    url: "",
  },
  services: {
    posting: false,
    mailing: false,
    recruitment: false,
    payment: false,
    contactMe: false,
  },
};
