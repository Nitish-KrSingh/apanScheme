import Card from './ui/Card';
import classes from './Signup.module.css';
import { AuthContext } from '../context/auth-context';
import { useContext, useEffect } from 'react';
import { postSignup } from '../api/auth-api';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

const Signup = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
      authContext.fetchFromLocalStorage();
    },[authContext]);
    const signupHandler = (name, password, email, phoneNumber) => {
      postSignup({
        name,
        password,
        email,
        phoneNumber,
      })
        .then((response) => {
          authContext.setLoading(false);
         authContext.setToken(response.data.token);
         window.localStorage.setItem('token',response.data.token); 
         navigate("/", {replace : true});
        })
        .catch((err) => {
          authContext.setLoading(false);
          console.log(err);
        });
    };
    
    const signupSubmitHandler = (event) => {
      authContext.setLoading(true);
      event.preventDefault();
      const {name,phone,email,password,cpassword} = event.target.elements;
      const formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
        cpassword: cpassword.value
      }
      if(formData.password !== formData.cpassword){
        alert("Password and Confirm Password must be same");
      }else{
      signupHandler(formData.name,formData.password,formData.email,formData.phone);
      }
    }

    if(authContext.token!=null){
      return <Navigate to={"/"}/>
    }

    return (
        <Card>
        <h2>Sign-Up</h2>
      <form onSubmit={signupSubmitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' required id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='phone'>Phone Number</label>
          <input type='number' name='phone' required id='phone' />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input id='password' required rows='5' />
        </div>
        <div className={classes.control}>
          <label htmlFor='cpassword'>Confirm Password</label>
          <input id='cpassword' required rows='5' />
        </div>
        <div className={classes.actions}>
          <button>Sign-Up</button>
        </div>
      </form>
    </Card>
    )
}

export default Signup;