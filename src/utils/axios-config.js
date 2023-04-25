import axios from "axios";

const MyServerInstance = axios.create({
    baseURL: 'http://10.146.3.114:5000'
  });

const MySchemeServerInstance = axios.create({
    baseURL: 'https://api.myscheme.in',
    
  });

    


export { MyServerInstance, MySchemeServerInstance };
  