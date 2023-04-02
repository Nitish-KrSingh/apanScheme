import Card from './ui/Card';
import classes from './FilterForm.module.css';

const FilterForm = () => 
{
    return (
        <Card>
        <h2>Help us find the best schemes for you</h2>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='gender'><sup>*</sup>Gender</label>
          <input type='radio' name='gender' required id='gender' value="Female" />Female
          <input type='radio' name='gender' required id='gender' value="Male" />Male
          <input type='radio' name='gender' required id='gender' value="Transgender" />Transgender
        </div>
        <div className={classes.control}>
        <label htmlFor='age'><sup>*</sup>Age</label>
          <input type='number' required id='age' />
        </div>
        <div className={classes.control}>
        <label htmlFor='martialStatus'><sup>*</sup>What is your Martial Status?</label>
          <select required name='martialStatus' id='martialStatus'>
            <option value='-1'>---Select One---</option>
            <option value='married'>Married</option>
            <option value='nmarried'>Never Married</option>
            <option value='divorced'>Divorced</option>
            <option value='separated'>Separated</option>
            <option value='widowed'>Widowed</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='state'>Please select your State?</label>
          <select required name='state' id='state'>
            <option value='-1'>---Select One---</option>
            <option value='andaman'>Andaman and Nicobar Islands</option>
            <option value='andhra'>Andhra Pradesh</option>
            <option value='arunachal'>Arunachal Pradesh</option>
            <option value='assam'>Assam</option>
            <option value='bihar'>Bihar</option>
            <option value='chandigarh'>Chandigarh</option>
            <option value='chattisgarh'>Chattisgarh</option>
            <option value='delhi'>Delhi</option>
            <option value='goa'>Goa</option>
            <option value='gujarat'>Gujarat</option>
            <option value='haryana'>Haryana</option>
            <option value='himachal'>Himachal Pradesh</option>
            <option value='jammu'>Jammu and Kashmir</option>
            <option value='jharkhand'>Jharkhand</option>
            <option value='karnataka'>Karnataka</option>
            <option value='kerala'>Kerala</option>
            <option value='ladakh'>Ladakh</option>
            <option value='lakhswadeep'>Lakshwadeep</option>
            <option value='madhya'>Madhya Pradesh</option>
            <option value='maharshtra'>Maharashtra</option>
            <option value='manipur'>Manipur</option>
            <option value='meghalay'>Meghalaya</option>
            <option value='mizoram'>Mizoram</option>
            <option value='nagaland'>Nagaland</option>
            <option value='odisha'>Odisha</option>
            <option value='puducherry'>Puducherry</option>
            <option value='punjab'>Punjab</option>
            <option value='sikkim'>Sikkim</option>
            <option value='tamil'>Tamil Nadu</option>
            <option value='telangana'>Telangan</option>
            <option value='dadar'>The Dadar and Nagar Haveli And Daman And Diu</option>
            <option value='tripura'>Tripura</option>
            <option value='uttarp'>Uttar Pradesh</option>
            <option value='uttarakhand'>Uttarakhand</option>
            <option value='westb'>West Bengal</option>
          </select>
        </div>
        <div className={classes.control}>
        <label htmlFor='residence'><sup>*</sup>Please select your area of residence?</label>
          Urban<input type='radio' name='residence' required id='residence' value="Urban" />
          Rural<input type='radio' name='residence' required id='residence' value="Rural" />
        </div>
        <div className={classes.control}>
        <label htmlFor='caste'><sup>*</sup>You belong To?</label>
          <input type='radio' name='caste' required id='caste' value="General" />General
          <input type='radio' name='caste' required id='caste' value="OBC" />Other Backward Classes(OBC)
          <input type='radio' name='caste' required id='caste' value="PVTG" />Particular Vulnerable Tribal Group(PVTG)
          <input type='radio' name='caste' required id='caste' value="SC" />Scheduled Caste(SC)
          <input type='radio' name='caste' required id='caste' value="ST" />Scheduled Tribe(ST)
        </div>
        <div className={classes.control}>
        <label htmlFor='pwd'><sup>*</sup>Are you a diferently abled?</label>
          Yes<input type='radio' name='pwd' required id='pwd' value="Yes" />
          No<input type='radio' name='pwd' required id='pwd' value="No" />
        </div>
        <div className={classes.control}>
        <label htmlFor='minority'><sup>*</sup>Do you belong to Minority?</label>
          Yes<input type='radio' name='minority' required id='minority' value="Yes" />
          No<input type='radio' name='minority' required id='minority' value="No" />
        </div>
        <div className={classes.control}>
        <label htmlFor='pwd'><sup>*</sup>Are you a Student</label>
          Yes<input type='radio' name='student' required id='student' value="Yes" />
          No<input type='radio' name='student' required id='student' value="No" />
        </div>
        <div className={classes.control}>
        <label htmlFor='bpl'><sup>*</sup>Do you belong to BPL?</label>
          Yes<input type='radio' name='bpl' required id='bpl' value="Yes" />
          No<input type='radio' name='bpl' required id='bpl' value="No" />
        </div>
        <div className={classes.control}>
          <label htmlFor='income'>What is your Family's Income?</label>
          <input type='number' required name='income' id='income' />
        </div>
        <div className={classes.control}>
          <label htmlFor='pincome'>What is your Parent's or Guardian's Income?</label>
          <input type='number' required name='pincome' id='pincome' />
        </div>
        {/*<div className={classes.control}>
          <label htmlFor='schemes'>You might be eligible for following schemes.</label>
          <input type='number' required name='schemes' id='schemes' />
        </div>*/}
        <div className={classes.actions}>
          <button>Next</button>
        </div>
      </form>
    </Card>
    )
}

export default FilterForm;