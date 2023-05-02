import axios from "axios";

const MyServerInstance = axios.create({
    baseURL: 'https://apnaschemebackend.onrender.com/'
  });

const MySchemeServerInstance = axios.create({
    baseURL: 'https://api.myscheme.in',
    
  });

    


export { MyServerInstance, MySchemeServerInstance };
  
