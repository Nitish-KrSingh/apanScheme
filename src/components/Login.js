import React from 'react';
import Card from './ui/Card';
import classes from './Signup.module.css';

const Login = () => {
    return (
        <div>
          <Card>
          <h2>Log - In</h2>
            <form className={classes.form}>
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