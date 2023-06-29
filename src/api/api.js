import axios from "axios";

const HEADERS = {
  "Content-Type": "application/json",
  accept: "application/json",
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: HEADERS,
});

export const FormAPI = {
  async postVacancy(dataForm) {
    return instance
      .post(`/vacancies/`, { ...dataForm })
      .then((response) => response.data);
  },
  async getVacancy(id) {
    return instance.get(`/vacancies/${id}`).then((response) => response.data);
  },
  async getVacancies(company_id) {
    return instance.get(`/vacancies/?company_id=${company_id}&page=0&limit=4`).then((response) => response.data);
  },
  async postRespVacancy(dataForm) {
    return instance
      .post(`/vacancies/responses/`, { ...dataForm })
      .then((response) => response.data);
  },
  async getRespVacancy({ vacancy_id }, page, limit, sort_by, sort_order) {
    return instance
      .get(
        `/vacancies/${vacancy_id}/responses/?page=${page}&limit=${limit}&sort_by=${sort_by}&sort_order=${sort_order}`
      )
      .then((response) => response.data.items);
  },
  async getRespVacancyByCandidate(query, page, limit, sort_by, sort_order) {
    let filter = "";
    for (const key in query) {
      if (query[key]) {
        filter = `${filter}&${key}=${query[key]}`;
      }
    }
    return instance
      .get(
        `/vacancies/v2/responses/users/?page=${page}&limit=${limit}&sort_by=${sort_by}&sort_order=${sort_order}${filter}`
      )
      .then((response) => response.data.items);
  },
};
