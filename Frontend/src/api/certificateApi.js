import axios from "axios";

const API = axios.create({
  baseURL: "https://certifypro-backend-vishal.onrender.com/api/certificates",
});

export default API;