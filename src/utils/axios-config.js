import axios from "axios";

const MyServerInstance = axios.create({
    baseURL: 'https://apnaschemebackend.onrender.com'
  });

const MySchemeServerInstance = axios.create({
    baseURL: 'https://api.myscheme.in',
    
  });

  const MyschemesDetails = axios.create({
    baseURL : 'https://proxy.cors.sh/https://www.myscheme.gov.in'
  })

    


export { MyServerInstance, MySchemeServerInstance, MyschemesDetails };
  
