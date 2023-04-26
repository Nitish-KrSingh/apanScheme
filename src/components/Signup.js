import Card from './ui/Card';
import classNamees from './Signup.module.css';
import { AuthContext } from '../context/auth-context';
import { useContext, useEffect } from 'react';
import { postSignup } from '../api/auth-api';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { UiContext } from '../context/ui-context';
import SignupImage from '../assets/images/SignUpImg.jpg';

const Signup = () => {
    const authContext = useContext(AuthContext);
    const uiContext = useContext(UiContext);
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
    
    const signupSubmitHandler = (event) => {
      uiContext.setLoading(true);
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
      <>
      <section className="h-auto">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
              <Card>
              <h2>Sign-Up</h2>
            <form onSubmit={signupSubmitHandler} className={classNamees.form}>
              <div className={classNamees.control}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' required id='name' />
              </div>
              <div className={classNamees.control}>
                <label htmlFor='phone'>Phone Number</label>
                <input type='number' name='phone' required id='phone' />
              </div>
              <div className={classNamees.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' required id='email' />
              </div>
              <div className={classNamees.control}>
                <label htmlFor='password'>Password</label>
                <input id='password' required rows='5' />
              </div>
              <div className={classNamees.control}>
                <label htmlFor='cpassword'>Confirm Password</label>
                <input id='cpassword' required rows='5' />
              </div>
              <div className={classNamees.actions}>
                <button>Sign-Up</button>
              </div>
            </form>
           
          </Card>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
          <img src={SignupImage} alt="Login image" className="w-100 vh-80 signupimg" />
        </div>
      </div>
    </div>
  </section>
    </>
    )
}

export default Signup;