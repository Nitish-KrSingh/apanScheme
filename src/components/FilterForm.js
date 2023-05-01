import FormCard from '../components/ui/FormCard/FormCard';
import React, { useState } from 'react';
import './FilterForm.module.css';
import Footer from "../components/Footer/Footer"


const FilterForm = () => {
  const [step, setStep] = useState(1);
  const [isSTD, setIsSTD] = useState(false);
  const [isPwd, setIsPwd] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };



  const handlePWDChange = (event) => {
    setIsPwd(event.target.value === "Yes");
  }

  const handleSTDChange = (event) => {
    setIsSTD(event.target.value === "No");
  }
  const renderStep = () => {
    switch (step) {
      case 1:
        return (

          <>
            <FormCard>
              <h2>Help us find the best schemes for you</h2>
              <div className="form-group  form-outline mb-4">
                <label htmlFor='gender'><sup>*</sup>Gender</label><br />
                <input type='radio' name='gender' required id='gender' class="radio m-2" value="Female" />Female <br />
                <input type='radio' name='gender' required id='gender' class="radio m-2" value="Male" />Male <br />
                <input type='radio' name='gender' required id='gender' class="radio m-2" value="Transgender" />Transgender
              </div>
              <div className="form-group  form-outline mb-4">
                <label htmlFor='age'><sup>*</sup>Age</label>
                <input type='number' class="form-control" required id='age' />
              </div>
              <container className="con">
              <button className="NextButton position-absolute bottom-0 start-50 translate-middle-x" onClick={nextStep}>Next</button>
              </container>
            </FormCard>
            <Footer />
          </>
        );
      case 2:
        return (
          <>
            <FormCard>
              <h1>Step 2</h1>
              <div className="form-group  form-outline mb-4">
                <label htmlFor='martialStatus'><sup>*</sup>What is your Martial Status?</label><br />
                <select required name='martialStatus'  class="form-control" id='martialStatus'>
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
                <select required name='state' class="form-control" id='state'>
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
              <container className="con">
              <button className="PrevButton mx-5" onClick={prevStep}>Previous</button>
              <button className="NextButton mx-5" onClick={nextStep}>Next</button>
              </container>
            </FormCard>
            <Footer />
          </>

        );


      case 3:
        return (
          <>
            <FormCard>
              <h1>Step 3</h1>
              <div className="form-group form-outline mb-4">
                <label htmlFor='pwd'><sup>*</sup>Are you a differently abled?</label><br />
                Yes<input type='radio' className="radio m-2" name='pwd' required id='pwd' value="Yes" onChange={handlePWDChange} />
                No<input type='radio' className="radio m-2" name='pwd' required id='pwd' value="No" onChange={handlePWDChange} />
              </div>
              {isPwd &&
                <div className="pwd-section">
                  {<div>
                    <label htmlFor='PWDpercentage'><sup>*</sup>What is your differently abled percentage?</label><br />
                    <input type='text' name='PWDpercentage' required id='PWDpercentage' />
                  </div>}
                </div>
              }
              <div className="form-group  form-outline mb-4">
                <label htmlFor='minority'><sup>*</sup>Do you belong to Minority?</label><br />
                Yes<input type='radio' class="radio m-2" name='minority' required id='minority' value="Yes" />
                No<input type='radio' class="radio m-2" name='minority' required id='minority' value="No" />
              </div>
              <container className="con">
              <button className="PrevButton mx-5" onClick={prevStep}>Previous</button>
              <button className="NextButton mx-5" onClick={nextStep}>Next</button>
              </container>
            </FormCard>
            <Footer />
          </>

        );


      case 4:
        return (
          <>
            <FormCard>
            <h1>Step 4</h1>
              <div className="form-group  form-outline mb-4">
                <label htmlFor='student'><sup>*</sup>Are you a Student</label><br />
                Yes<input type='radio' class="radio m-2" name='student' required id='student' value="Yes" onChange={handleSTDChange} />
                No<input type='radio' class="radio m-2" name='student' required id='student' value="No" onChange={handleSTDChange} />
              </div>
              {isSTD &&
                <div className="Student-section">
                  {
                    <div>
                      <label htmlFor='employmentStatus'><sup>*</sup>What is your current employment status ?</label> <br/>
                      <input type='radio' name='employmentStatus' required id='employmentStatus' class="radio m-2" value="Employed" />Female <br />
                      <input type='radio' name='employmentStatus' required id='employmentStatus' class="radio m-2" value="Unemployed" />Male <br />
                      <input type='radio' name='employmentStatus' required id='employmentStatus' class="radio m-2" value="Self-Employed/ Entrepreneur" />Transgender 

                    </div>
                  }
                </div>
              }

              <container className="con">
              <button className="PrevButton  mx-5" onClick={prevStep}>Previous</button>
              <button className="NextButton  mx-5" onClick={nextStep}>Next</button>
              </container>
            </FormCard>
            <Footer />
          </>
        );

      case 5:
        return (
          <>
            <FormCard>
              <h1>Step 5</h1>
              <div className="form-group  form-outline mb-4">
                <label htmlFor='bpl'><sup>*</sup>Do you belong to BPL?</label><br />
                Yes<input type='radio' class="radio m-2" name='bpl' required id='bpl' value="Yes" />
                No<input type='radio' class="radio m-2" name='bpl' required id='bpl' value="No" />
              </div>
              <div className="form-group  form-outline mb-4">
                <label htmlFor='income'>What is your Family's Income?</label> <br />
                <input type='number'  class="form-control" required name='income' id='income' />
              </div>

              <div className="form-group  form-outline mb-4">
                <label htmlFor='pincome'>What is your Parent's or Guardian's Income?</label> <br />
                <input type='number' class="form-control" required name='pincome' id='pincome' />
              </div>


              <container className="con">
              <button className="PrevButton mx-5" onClick={prevStep}>Previous</button>
              <button className="NextButton  mx-5">Submit</button>
              </container>
            </FormCard>
            <Footer />
          </>

        );
      default:
        return null;

    }
  };


  return <div>{renderStep()}</div>;

};
export default FilterForm;