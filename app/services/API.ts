import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9b6485a98f1d2b58864153d53d56cd51",
    language: "pt-BR",
  },
});

export default API;

