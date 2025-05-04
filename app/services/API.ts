"use client";
import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9b6485a98f1d2b58864153d53d56cd51", //use a sua cheve de API aqui
    language: "pt-BR",
  },
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Erro na resposta da API:", {
        status: error.response.status,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error("Sem resposta do Servidor:", error.message);
    } else {
      console.error("Erro na configuração da requisição:", error.message);
    }
    return Promise.reject(error);
  }
);

export default API;
