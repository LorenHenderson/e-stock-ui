import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:8083/api/v1.0/market/company'
});
export default axios;