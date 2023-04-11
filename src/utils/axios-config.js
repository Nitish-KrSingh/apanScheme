import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'http://192.168.43.55:5000'
  });


export default AxiosInstance;