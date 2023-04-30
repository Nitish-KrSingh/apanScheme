import FormCard from '../components/ui/FormCard/FormCard';
import React, { useState } from 'react';
import classes from './FilterForm.module.css';

const FilterForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (


          <FormCard>
            <h2>Help us find the best schemes for you</h2>
            <div className="form-group  form-outline mb-4">
              <label htmlFor='gender'><sup>*</sup>Gender</label><br />
              <input type='radio' name='gender' required id='gender' class="radio m-2" value="Female" />Female
              <input type='radio' name='gender' required id='gender' class="radio m-2" value="Male"/>Male
              <input type='radio' name='gender' required id='gender' class="radio m-2" value="Transgender" />Transgender
            </div>
            <div className="form-group  form-outline mb-4">
              <label htmlFor='age'><sup>*</sup>Age</label>
              <input type='number' required id='age' />
            </div>
            <button className="btn btn-primary" onClick={nextStep}>Next</button>
          </FormCard>
        );
      case 2:
        return (
          <FormCard>
            <h1>Step 2</h1>
            <div className="form-group  form-outline mb-4">
              <label htmlFor='martialStatus'><sup>*</sup>What is your Martial Status?</label><br />
              <select required name='martialStatus' id='martialStatus'>
                <option value='-1'>---Select One---</option>
                <option value='married'>Married</option>
                <option value='nmarried'>Never Married</option>
                <option value='divorced'>Divorced</option>
                <option value='separated'>Separated</option>
                <option value='widowed'>Widowed</option>
              </select>
            </div>

            <div className="form-group  form-outline mb-4">
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

            <div className="form-group  form-outline mb-4">
              <label htmlFor='residence'><sup>*</sup>Please select your area of residence?</label><br />
              Urban<input type='radio' class="radio m-2" name='residence' required id='residence' value="Urban" />
              Rural<input type='radio' class="radio m-2" name='residence' required id='residence' value="Rural" />
            </div>

            <button className="btn btn-secondary mx-5" onClick={prevStep}>Previous</button>
            <button className="btn btn-primary mx-5" onClick={nextStep}>Next</button>
          </FormCard>
        );
      case 3:
        return (
          <FormCard>
            <h1>Step 3</h1>
            <div className="form-group  form-outline mb-4">
              <label htmlFor='pwd'><sup>*</sup>Are you a diferently abled?</label><br />
              Yes<input type='radio'class="radio m-2" name='pwd' required id='pwd' value="Yes" />
              No<input type='radio' class="radio m-2" name='pwd' required id='pwd' value="No" />
            </div>
            <div className="form-group  form-outline mb-4">
              <label htmlFor='minority'><sup>*</sup>Do you belong to Minority?</label><br />
              Yes<input type='radio' class="radio m-2" name='minority' required id='minority' value="Yes" />
              No<input type='radio' class="radio m-2"name='minority' required id='minority' value="No" />
            </div>
            <div className="form-group  form-outline mb-4">
              <label htmlFor='pwd'><sup>*</sup>Are you a Student</label><br />
              Yes<input type='radio' class="radio m-2"name='student' required id='student' value="Yes" />
              No<input type='radio'class="radio m-2" name='student' required id='student' value="No" />
            </div>

            <div className="form-group  form-outline mb-4">
              <label htmlFor='bpl'><sup>*</sup>Do you belong to BPL?</label><br />
              Yes<input type='radio' class="radio m-2"name='bpl' required id='bpl' value="Yes" />
              No<input type='radio' class="radio m-2" name='bpl' required id='bpl' value="No" />
            </div>
            <button className="btn btn-secondary" onClick={prevStep}>Previous</button>
            <button className="btn btn-primary" onClick={nextStep}>Next</button>
          </FormCard>
        );


      case 4:
        return (
          <FormCard>
            <h1>Step 4</h1>

            <div className="form-group  form-outline mb-4">
              <label htmlFor='income'>What is your Family's Income?</label>
              <input type='number' required name='income' id='income' />
            </div>

            <div className="form-group  form-outline mb-4">
              <label htmlFor='pincome'>What is your Parent's or Guardian's Income?</label>
              <input type='number' required name='pincome' id='pincome' />
            </div>



            <button className="btn btn-secondary m-2" onClick={prevStep}>Previous</button>
            <button className="btn btn-primary m-2">Submit</button>
          </FormCard>
        );
      default:
        return null;
    }
  };
  return <div>{renderStep()}</div>;
};
export default FilterForm;