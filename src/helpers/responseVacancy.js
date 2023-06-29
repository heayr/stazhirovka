import Cookies from "js-cookie";

export const setResponseCookies = (data) => {
  if (typeof window === "undefined") {
    return;
  }
  data.descResponse.last_name
    ? Cookies.set("delaem_data_last_name", data.descResponse.last_name)
    : null;
  data.descResponse.first_name
    ? Cookies.set("delaem_data_first_name", data.descResponse.first_name)
    : null;
  data.descResponse.middle_name
    ? Cookies.set("delaem_data_middle_name", data.descResponse.middle_name)
    : null;
  data.descResponse.phone
    ? Cookies.set("delaem_data_phone", data.descResponse.phone)
    : null;
  data.descResponse.email
    ? Cookies.set("delaem_data_email", data.descResponse.email)
    : null;
  data.descResponse.city
    ? Cookies.set("delaem_data_city", data.descResponse.city)
    : null;
  data.paramContest.best_season
    ? Cookies.set("delaem_data_best_season", data.paramContest.best_season)
    : null;
  data.paramContest.best_status
    ? Cookies.set("delaem_data_best_status", data.paramContest.best_status)
    : null;
};

export const getResponseCookies = (data) => {
  if (typeof window === "undefined") {
    return;
  }
  return Cookies.get(`delaem_data_${data}`)?Cookies.get(`delaem_data_${data}`):"";
};
