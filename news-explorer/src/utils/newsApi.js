import { baseUrl } from "./constants";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
};

export const searchArticles = ({ q, fromDate, toDate }, apiKey) => {
  return fetch(
    `${baseUrl}?q=${q}&from=${fromDate}&to=${toDate}&apiKey=${apiKey}`,
  ).then(handleServerResponse);
};
