import FormCard from "../components/ui/FormCard/FormCard";
import React, { useEffect, useReducer, useState } from "react";
import "./FilterForm.css";
import Footer from "../components/Footer/Footer";
import { STATES } from "../utils/data";
import { getSchemeByIdentifier } from "../api/scheme-api";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  gender: "",
  age: "",
  martialStatus: "",
  beneficiaryState: "",
  residence: "",
  caste: "",
  disability: "",
  disabilityPercentage: "",
  minority: "",
  isStudent: "",
  isBpl: "",
  parentIncomeAnnual: "",
  familyIncomeAnnual: "",
  employmentStatus: "",
  scheme : [],
  schemeBasedOnCategory : [],
  query :[]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload,
      };
    case "SET_GENDER":
      console.log(action);
      return {
        ...state,
        gender: action.payload,
      };
    case "SET_AGE":
      return {
        ...state,
        age: action.payload,
      };
    case "SET_MARTIAL_STATUS":
      return {
        ...state,
        martialStatus: action.payload,
      };
    case "SET_BENEFICIARY_STATE":
      return {
        ...state,
        beneficiaryState: action.payload,
      };
    case "SET_RESIDENCE":
      return {
        ...state,
        residence: action.payload,
      };
    case "SET_CASTE":
      return {
        ...state,
        caste: action.payload,
      };
    case "SET_DISABILITY":
      return {
        ...state,
        disability: action.payload,
      };
    case "SET_MINORITY":
      return {
        ...state,
        minority: action.payload,
      };
    case "SET_IS_STUDENT":
      return {
        ...state,
        isStudent: action.payload,
      };
    case "SET_IS_BPL":
      return {
        ...state,
        isBpl: action.payload,
      };
    case "SET_PARENT_INCOME_ANNUAL":
      return {
        ...state,
        parentIncomeAnnual: action.payload,
      };
    case "SET_FAMILY_INCOME_ANNUAL":
      return {
        ...state,
        familyIncomeAnnual: action.payload,
      };
    case "SET_DISABILITY_PERCENTAGE":
      return {
        ...state,
        disabilityPercentage: action.payload,
      };
    case "SET_EMPLOYMENT_STATUS":
      return {
        ...state,
        employmentStatus: action.payload,
      };
    case "SET_SCHEME":
      return {
        ...state,
        scheme: action.payload,
      };
    case "SET_SCHEME_BASED_ON_CATEGORY":
      const s = {};
      action.payload.forEach(element => {
        if(s[element.fields.schemeCategory]){
          s[element.fields.schemeCategory] = s[element.fields.schemeCategory]+1;
        }else{
          s[element.fields.schemeCategory] = 1;
        }
       
      });

      const sch=[];
      for (const key in s) {
        sch.push({key : key , value : s[key]})
       
    }
    
      return {
        ...state,
        schemeBasedOnCategory: sch,
      };
    default:
      return state;
  }
};
const FilterForm = () => {
  const [step, setStep] = useState(1);
  const [isSTD, setIsSTD] = useState(true);
  const [isPwd, setIsPwd] = useState(false);
  const [isBpl, setIsBpl] = useState(false);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const navigate = useNavigate();


  const bplChangeHandler = (event) => {
    setIsBpl(event.target.value === "Yes");
  };
  const nextStep = (e) => {
    setStep(step + 1);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (step === 1) {
      const { gender, age } = e.target.elements;
      dispatch({ type: "SET_GENDER", payload: gender.value });
      dispatch({ type: "SET_AGE", payload: age.value });
    } else if (step === 2) {
      const { martialStatus, state, residence } = e.target.elements;
      dispatch({ type: "SET_MARTIAL_STATUS", payload: martialStatus.value });
      dispatch({ type: "SET_BENEFICIARY_STATE", payload: state.value });
      dispatch({ type: "SET_RESIDENCE", payload: residence.value });
    } else if (step === 3) {
      const { caste, minority, disabilityPercentage } = e.target.elements;
      dispatch({ type: "SET_CASTE", payload: caste.value });
      dispatch({ type: "SET_DISABILITY", payload: isPwd });
      if (isPwd) {
        dispatch({
          type: "SET_DISABILITY_PERCENTAGE",
          payload: disabilityPercentage.value,
        });
      }
      dispatch({ type: "SET_MINORITY", payload: minority.value });
    } else if (step === 4) {
      const { employmentStatus } = e.target.elements;
      dispatch({ type: "SET_IS_STUDENT", payload: isSTD });
     
      if (!isSTD) {
        dispatch({
          type: "SET_EMPLOYMENT_STATUS",
          payload: employmentStatus.value,
        });
      }
    } else if (step === 5) {
     
      dispatch({ type: "SET_IS_BPL", payload: isBpl });
      
    }
    if(step === 5){
      fetchScheme();
    }
    if (step < 6) setStep(step + 1);
  };

  const fetchScheme = () => {
    let ageIdentifier = "age-general";
    if(state.caste === "Scheduled Caste (SC)"){
      ageIdentifier = "age-sc";
    }else if(state.caste === "Scheduled Tribe (ST)"){
      ageIdentifier = "age-st";
    }else if(state.caste === "Other Backward Class (OBC)"){
      ageIdentifier = "age-obc";
    }else if(state.caste === "Particularly Vulnerable Tribal Group (PVTG)"){
      ageIdentifier = "age-pvtg";
    }
    let disability= [];
    if(state.disability){
     disability = [{ identifier: "disability", value: "Yes" },
      { identifier: "disabilityPercentage", min: state.disabilityPercentage, max: state.disabilityPercentage }];
    }else{
      disability = [{ identifier: "disability", value: "No" }];
    }

    let student = [];
    if(state.isStudent){
      student =[{ identifier: "isStudent", value: "Yes" }]
    }else{
      student =  [
        { identifier: "isStudent", value: "No" },
        { identifier: "employmentStatus", value: state.employmentStatus },
      { identifier: "employmentStatus", value: "All" }];
    }
    console.log(isBpl,state.familyIncomeAnnual,state.parentIncomeAnnual);
    let bpl = [];
    if(isBpl){
      bpl = [{ identifier: "isBpl", value: "Yes" }]
    }else{
      bpl =  [{ identifier: "isBpl", value: "No" },
      { identifier: "familyIncomeAnnual", min: state.familyIncomeAnnual, max: state.familyIncomeAnnual },
      { identifier: "parentIncomeAnnual", min: state.parentIncomeAnnual, max: state.parentIncomeAnnual }
    ];
    }
    console.log(bpl);
    const query = {
      lang: "en",
      keyword: "",
      sort: "",
      from: 0,
      size: 10,
      q: [
        { identifier: "gender", value: state.gender },
        { identifier: "gender", value: "All" },
        { identifier: ageIdentifier, min: state.age, max: state.age },
        { identifier: "beneficiaryState", value: state.beneficiaryState },
        { identifier: "beneficiaryState", value: "All" },
        { identifier: "residence", value: state.residence },
        { identifier: "residence", value: "Both" },
        { identifier: "caste", value: state.caste },
        { identifier: "caste", value: "All" },
        ...disability,
        ...student,
       ...bpl,
      ],
    };
      dispatch({ type: "SET_QUERY", payload: query });
    getSchemeByIdentifier(query).then((res) => {
       console.log(res);
       dispatch({ type: "SET_SCHEMES", payload: res.data.data.hits.items });
       dispatch({ type: "SET_SCHEME_BASED_ON_CATEGORY", payload: res.data.data.hits.items });
      
    }).catch((err) => {
      console.log(err);
    });
  };
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePWDChange = (event) => {
    setIsPwd(event.target.value === "Yes");
  };

  const handleSTDChange = (event) => {
    console.log(event.target.value);
    setIsSTD(!(event.target.value === "No"));
  };

  const searchScheme = (e) => {
    e.preventDefault();
    navigate('/schemes/search/user-journey', { state:  state.query  });
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <FormCard>
              <h2>Help us find the best schemes for you</h2>
              <div className="form-group  form-outline mb-4">
                <label htmlFor="gender">
                  <sup>*</sup>Gender
                </label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  required
                  id="gender"
                  className="radio m-2"
                  value="Female"
                />
                Female <br />
                <input
                  type="radio"
                  name="gender"
                  required
                  id="gender"
                  className="radio m-2"
                  value="Male"
                />
                Male <br />
                <input
                  type="radio"
                  name="gender"
                  required
                  id="gender"
                  className="radio m-2"
                  value="Transgender"
                />
                Transgender
              </div>
              <div className="form-group  form-outline mb-4">
                <label htmlFor="age">
                  <sup>*</sup>Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  required
                  id="age"
                />
              </div>
              <div className="con">
                <button
                  type="submit"
                  className="NextButton position-absolute bottom-0 start-50 translate-middle-x"
                >
                  Next
                </button>
              </div>
            </FormCard>
          </>
        );
      case 2:
        return (
          <>
            <FormCard>
              <h1>Step 2</h1>
              <div className="form-group  form-outline mb-4">
                <label htmlFor="martialStatus">
                  <sup>*</sup>What is your Martial Status?
                </label>
                <br />
                <select
                  required
                  name="martialStatus"
                  className="form-control"
                  id="martialStatus"
                >
                  <option value="-1">---Select One---</option>
                  <option value="Married">Married</option>
                  <option value="Never Married">Never Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Separated">Separated</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              <div className="form-group  form-outline mb-4">
                <label htmlFor="state">Please select your State?</label>
                <select
                  required
                  name="state"
                  className="form-control"
                  id="state"
                >
                  <option value="-1">---Select One---</option>
                  {STATES.map((state) => (<option value={state["States/UTs"]} key={state["States/UTs"]}>{state["States/UTs"]}</option>))}
                </select>
              </div>

              <div className="form-group  form-outline mb-4">
                <label htmlFor="residence">
                  <sup>*</sup>Please select your area of residence?
                </label>
                <br />
                Urban
                <input
                  type="radio"
                  className="radio m-2"
                  name="residence"
                  required
                  id="residence"
                  value="Urban"
                />
                Rural
                <input
                  type="radio"
                  className="radio m-2"
                  name="residence"
                  required
                  id="residence"
                  value="Rural"
                />
              </div>
              <div className="con">
                <button type="button" className="NextButton mx-5" onClick={prevStep}>
                  Previous
                </button>
                <button className="NextButton mx-5" type="submit">
                  Next
                </button>
              </div>
            </FormCard>
          </>
        );

      case 3:
        return (
          <>
            <FormCard>
              <h1>Step 3</h1>
              <div className="form-group form-outline mb-4">
                <label htmlFor="pwd">
                  <sup>*</sup>Are you a differently abled?
                </label>
                <br />
                Yes
                <input
                  type="radio"
                  className="radio m-2"
                  name="pwd"
                  required
                  id="pwd"
                  value="Yes"
                  onChange={handlePWDChange}
                />
                No
                <input
                  type="radio"
                  className="radio m-2"
                  name="pwd"
                  required
                  id="pwd"
                  value="No"
                  onChange={handlePWDChange}
                />
              </div>
              {isPwd && (
                <div className="pwd-section">
                  {
                    <div>
                      <label htmlFor="disabilityPercentage">
                        <sup>*</sup>What is your differently abled percentage?
                      </label>
                      <br />
                      <input
                        type="text"
                        name="disabilityPercentage"
                        required
                        id="disabilityPercentage"
                      />
                    </div>
                  }
                </div>
              )}
              <div className="form-group  form-outline mb-4">
                <label htmlFor="minority">
                  <sup>*</sup>Do you belong to Minority?
                </label>
                <br />
                Yes
                <input
                  type="radio"
                  className="radio m-2"
                  name="minority"
                  required
                  id="minority"
                  value="Yes"
                />
                No
                <input
                  type="radio"
                  className="radio m-2"
                  name="minority"
                  required
                  id="minority"
                  value="No"
                />
                <br />
                <label htmlFor="caste" className="form-label">
                  You belongs to...
                </label>
                <select
                  id="caste"
                  name="caste"
                  className="form-select"
                  defaultValue=""
                >
                  <option value="">Open this select menu</option>
                  <option value="General">General</option>
                  <option value="Other Backward Class (OBC)">
                    Other Backward Class (OBC)
                  </option>
                  <option value="Particularly Vulnerable Tribal Group (PVTG)">
                    Particularly Vulnerable Tribal Group (PVTG)
                  </option>
                  <option value="Scheduled Caste (SC)">
                    Scheduled Caste (SC)
                  </option>
                  <option value="Scheduled Tribe (ST)">
                    Scheduled Tribe (ST)
                  </option>
                </select>
              </div>
              <div className="con">
                <button type="button"  className="NextButton mx-5" onClick={prevStep}>
                  Previous
                </button>
                <button className="NextButton mx-5" type="submit">
                  Next
                </button>
              </div>
            </FormCard>
          </>
        );

      case 4:
        return (
          <>
            <FormCard>
              <h1>Step 4</h1>
              <div className="form-group  form-outline mb-4">
                <label htmlFor="student">
                  <sup>*</sup>Are you a Student
                </label>
                <br />
                Yes
                <input
                  type="radio"
                  className="radio m-2"
                  name="student"
                  required
                  id="student"
                  value="Yes"
                  onChange={handleSTDChange}
                />
                No
                <input
                  type="radio"
                  className="radio m-2"
                  name="student"
                  required
                  id="student"
                  value="No"
                  onChange={handleSTDChange}
                />
              </div>
              {!isSTD && (
                <div className="Student-section">
                  {
                    <div>
                      <label htmlFor="employmentStatus">
                        <sup>*</sup>What is your current employment status ?
                      </label>
                      <br />
                      <input
                        type="radio"
                        name="employmentStatus"
                        required
                        id="employmentStatus"
                        className="radio m-2"
                        value="Employed"
                      />
                      Employed <br />
                      <input
                        type="radio"
                        name="employmentStatus"
                        required
                        id="employmentStatus"
                        className="radio m-2"
                        value="Unemployed"
                      />
                      Unemployed <br />
                      <input
                        type="radio"
                        name="employmentStatus"
                        required
                        id="employmentStatus"
                        className="radio m-2"
                        value="Self-Employed/ Entrepreneur"
                      />
                      Self-Employed/ Entrepreneur
                    </div>
                  }
                </div>
              )}

              <div className="con">
                <button type="button" className="NextButton  mx-5" onClick={prevStep}>
                  Previous
                </button>
                <button className="NextButton  mx-5" type="submit">
                  Next
                </button>
              </div>
            </FormCard>
          </>
        );
       
      case 5:
        return (
          <>
            <FormCard>
              <h1>Step 5</h1>
              <div className="form-group  form-outline mb-4">
                <label htmlFor="bpl">
                  <sup>*</sup>Do you belong to BPL?
                </label>
                <br />
                Yes
                <input
                  type="radio"
                  className="radio m-2"
                  name="bpl"
                  required
                  id="bpl"
                  checked={isBpl}
                  value="Yes"
                  onChange={bplChangeHandler}
                />
                No
                <input
                  checked={!isBpl}
                  onChange={bplChangeHandler}
                  type="radio"
                  className="radio m-2"
                  name="bpl"
                  required
                  id="bpl"
                  value="No"
                />
              </div>
              {!isBpl && (
                <>
                  {" "}
                  <div className="form-group  form-outline mb-4">
                    <label htmlFor="income">
                      What is your Family's Income?
                    </label>
                    <br />
                    <input
                      type="number"
                      className="form-control"
                      required
                      name="familyIncomeAnnual"
                      id="familyIncomeAnnual"
                      onChange={(e)=>dispatch({
                        type: "SET_FAMILY_INCOME_ANNUAL",
                        payload: e.target.value,
                      })}
                    />
                  </div>
                  <div className="form-group  form-outline mb-4">
                    <label htmlFor="parentIncomeAnnual">
                      What is your Parent's or Guardian's Income?
                    </label>
                    <br />
                    <input
                      type="number"
                      className="form-control"
                      required
                      name="parentIncomeAnnual"
                      onChange={(e)=>dispatch({
                        type: "SET_PARENT_INCOME_ANNUAL",
                        payload: e.target.value,
                      })}
                      id="parentIncomeAnnual"
                    />
                  </div>
                </>
              )}
              <div className="con">
                <button type="button"  className="NextButton mx-5" onClick={prevStep}>
                  Previous
                </button>
                <button type="submit" className="NextButton  mx-5">
                  Submit
                </button>
              </div>
            </FormCard>
          </>
        );
        
      case 6:
        return (
          <FormCard>
            <h2>You might be eligible for the following schemes...</h2>
            <p>*Select one or more categories to view.</p>
            <div className="container">
              {state.schemeBasedOnCategory.length === 0 && 'No schemes found'}
            {state.schemeBasedOnCategory.map((e)=><div onClick={searchScheme} role="button" key={e.key} className="card card-body">
            <h5 className="card-title">
              {e.key}
            </h5>
            <p className="card-body">
              {e.value} Schemes
            </p>
            </div>)}
            </div>
          </FormCard>);
      default:
        return null;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>{renderStep()}</form>
      <Footer />
    </div>
  );
};
export default FilterForm;
