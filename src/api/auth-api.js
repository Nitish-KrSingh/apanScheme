import {MyServerInstance} from "../utils/axios-config";

const postSignup= async (signupform) => {
    return (await MyServerInstance.post(`/users/signup`,signupform));
}
const postLogin= async (loginData) =>{
    
    return (await MyServerInstance.post('/users/login',loginData));
}

const getLogout = async (headers) =>{
    return (await MyServerInstance.get('/users/logout',{headers}));
}
const getUser = async (headers) =>{
    return (await MyServerInstance.get('/users/user',{headers}));
}

export {postSignup ,postLogin,getLogout,getUser};