import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
          <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''}  to='/signup'>Signup</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending })=>isActive ?   classes.active : ''}  to='/login'>Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default Navbar;