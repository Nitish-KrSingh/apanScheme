import React, { useContext  } from 'react';
import classes from './Navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {AuthContext}  from '../../context/auth-context';
import {ReactComponent as ProfileIcon } from '../../assets/icon/profile.svg';
import { getLogout } from '../../api/auth-api';
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    authContext.setLoading(true);
    getLogout({
      "Content-Type": "application/json",
      Authorization: `Bearer ${authContext.token}`,
    })
      .then((response) => {
        authContext.setLoading(false);
        
      authContext.setToken(null);
        window.localStorage.removeItem("token");
        window.localStorage.setItem("logout", Date.now());
      })
      .catch((err) => {
        authContext.setLoading(false);
        console.log(err);
      });


  };

    return(
      <header className={classes.header}>
      <div className={classes.logo}>Apna<span className={classes.logoSpan}>Scheme</span></div>
      <nav>
        <ul>
          <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''}  to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''} to='/schemes'>Schemes</NavLink>
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
            <button className={`btn`}  onClick={()=> navigate("/profile")}><ProfileIcon width={40}/></button>
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