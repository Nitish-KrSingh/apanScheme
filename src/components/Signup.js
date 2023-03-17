import Card from './ui/Card';
import classes from './Signup.module.css';

const Signup = () => {
    return (
        <Card>
        <h2>Sign-Up</h2>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='phone'>Phone Number</label>
          <input type='number' required id='phone' />
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