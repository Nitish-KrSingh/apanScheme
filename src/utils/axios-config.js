import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'http://10.146.3.114:5000'
  });


export default AxiosInstance;