import AxiosInstance from "../utils/axios-config";

const postSignup= async (signupform) => {
    return (await AxiosInstance.post(`/users/signup`,signupform));
}
const postLogin= async (loginData) =>{
    
    return (await AxiosInstance.post('/users/login',loginData));
}

const getLogout = async (headers) =>{
    return (await AxiosInstance.get('/users/logout',{headers}));
}
const getUser = async (headers) =>{
    return (await AxiosInstance.get('/users/user',{headers}));
}

export {postSignup ,postLogin,getLogout,getUser};