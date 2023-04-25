import React, { useEffect } from 'react';
import Card from './ui/Card';
import classes from './Signup.module.css';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { postLogin } from '../api/auth-api';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { UiContext } from '../context/ui-context';

const Login = () => {

  const uiContext = useContext(UiContext);
  const authContext = useContext(AuthContext);
  const  navigate = useNavigate();
  useEffect(() => {
    authContext.fetchFromLocalStorage();
    if(authContext.token!=null){
   
      redirect("/");
    }
  },[authContext]);

  const loginHandler = (email, password) => {
    var nameMatch = email.match(/^([^@]*)@/);
    var username = nameMatch ? nameMatch[1] : null;
    postLogin({
      username,
      email,
      password,
    })
      .then((response) => {
        uiContext.setLoading(false);
        authContext.setToken(response.data.token);
         window.localStorage.setItem('token',response.data.token); 
         navigate("/", {replace : true});
      })
      .catch((err) => {
        uiContext.setLoading(false);
        console.log(err);
      });
  };

  const loginFormSubmitHandler = (event)=>{
    uiContext.setLoading(true);
    event.preventDefault();
    const {email,password} = event.target.elements;
    const formData = {
      email: email.value,
      password: password.value
    }
    console.log(formData);
    loginHandler(formData.email,formData.password);
  }
  if(authContext.token!=null){
    return <Navigate to={"/"}/>
  }
    return (
        <div>
          <Card>
          <h2>Log - In</h2>
            <form onSubmit={loginFormSubmitHandler} className={classes.form}>
            <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input id='password' required rows='5' />
        </div>
        <div className={classes.actions}>
          <button>Log-in</button>
        </div>
        </form>
        </Card>
        </div>
    )
}

export default Login;