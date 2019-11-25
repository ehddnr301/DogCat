import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "x-api-key": "22175ed5-ec44-47a4-ae2e-e25bf6101de4"
  }
});

const api1 = axios.create({
  baseURL: "https://api.thedogapi.com/v1/",
  headers: {
    "x-api-key": "06aa1e48-fe28-4d7e-bc9e-6b30151b3e40"
  }
});

export const catApi = {
  catImage: (page = 1) =>
    api.get("images/search", { params: { limit: "20", page } })
};

export const dogApi = {
  dogImage: (page = 1) =>
    api1.get("images/search", { params: { limit: "20", page } })
};
