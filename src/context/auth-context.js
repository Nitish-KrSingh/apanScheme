import { createContext, useEffect, useState } from "react";
import { getLogout, postLogin, postSignup } from "../api/auth-api";

export const AuthContext = createContext({
  token: null,
  user: {},
  isLoading : false,
  setLoading : (isLoading) => {},
  setUser : (user) => {},
  setToken : (token) => {},
  fetchFromLocalStorage : () => {},
});

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [isLoading,setLoading] = useState(false);
  
  useEffect(() => {
    fetchFromLocalStorage();
   },[]);
  
 const fetchFromLocalStorage = () => {
 const data  = window.localStorage.getItem('token');
 setUser({});
 setToken(data);
 }


  return (
    <AuthContext.Provider
      value={{
        token: token,
        user: user,
        isLoading : isLoading,
        // signup: signupHandler,
        // logout: logoutHandler,
        // login: loginHandler,
        setLoading : setLoading,
        setToken : setToken,
        setUser : setUser,
        fetchFromLocalStorage : fetchFromLocalStorage
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
