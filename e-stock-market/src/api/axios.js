import Axios from "axios";

const companyAxios = Axios.create({
  baseURL: "http://localhost:8083/api/v1.0/market/company",
});
export { companyAxios };

const stockAxios = Axios.create({
  baseURL: "http://localhost:8084/api/v1.0/market/stock",
});
export { stockAxios };
