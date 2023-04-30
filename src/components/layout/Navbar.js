import React, { useContext  } from 'react';
import classes from './Navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {AuthContext}  from '../../context/auth-context';
import {ReactComponent as ProfileIcon } from '../../assets/icon/profile.svg';
import { getLogout } from '../../api/auth-api';
import { UiContext } from '../../context/ui-context';
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const uiContext = useContext(UiContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    uiContext.setLoading(true);
    getLogout({
      "Content-Type": "application/json",
      Authorization: `Bearer ${authContext.token}`,
    })
      .then((response) => {
        uiContext.setLoading(false);
        
      authContext.setToken(null);
        window.localStorage.removeItem("token");
        window.localStorage.setItem("logout", Date.now());
      })
      .catch((err) => {
        uiContext.setLoading(false);
        console.log(err);
        alert("Something went wrong");
      });


  };

    return(
      <header className={classes.header}>
      <div className={classes.logo}>Apna<span className={classes.logoSpan}>Scheme</span></div>
      <nav>
        <ul >
          <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''}  to='/'>Home</NavLink>
          </li>
          <li>
            <a  href='#scheme'>Schemes</a>
          </li>
          <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''}   to='/ministries'>Ministries</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''}  to='/about'>About Us</NavLink>
          </li>
          {authContext.token == null &&  <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''}  to='/signup'>Signup</NavLink>
          </li> }
        {authContext.token ==null && <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''}  to='/login'> Login</NavLink>
          </li>}

          {authContext.token !=null && <li>
            <span role='button' onClick={()=> navigate("/profile")}><ProfileIcon width={40}/></span>
          </li>}

          {authContext.token !=null && <li>
            <button className={`btn btn-lg`}  onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
    )
}

export default Navbar;