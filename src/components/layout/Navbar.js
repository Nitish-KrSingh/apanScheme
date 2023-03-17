import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
      <header className={classes.header}>
      <div className={classes.logo}>apnaScheme</div>
      <nav>
        <ul>
          <li>
            <NavLink className={classes.active} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/schemes'>Schemes</NavLink>
          </li>
          <li>
            <NavLink to='/ministries'>Ministries</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>Sign - Up</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Log - In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default Navbar;