import axios from "axios";

const MyServerInstance = axios.create({
    baseURL: 'http://192.168.111.68:5000'
  });

const MySchemeServerInstance = axios.create({
    baseURL: 'https://api.myscheme.in',
    
  });

    


export { MyServerInstance, MySchemeServerInstance };
  