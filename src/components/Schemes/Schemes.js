import { Fragment } from "react";
import classes from "./Schemes.module.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import FilterResultCard from "../FilterResultCard/FilterResultCard";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

const Schemes = () => {
  return (
    <Fragment>
      {/* <div className={classes.schemeHeader}>
        <h1 className={classes.schemeTitle}>Schemes</h1>
      </div> */}
      <div className={`row ${classes.schemes} p-2`}>
        <div className={`col-lg-3 card p-3`}>
          <div className={`${classes.filterContainer}`}>
            <div className={classes.filterHeader}>
              <h5>Filter By</h5>
              <button className="btn btn-primary">Reset Filter</button>
            </div>
            <hr />

            {/* FILTER FORM */}
            <div>
              <FilterCheckBox title={"All"} count={1} />
              <FilterCheckBox title={"Male"} count={1} />
              <FilterCheckBox title={"Female"} count={1} />
              <FilterCheckBox title={"Transgender"} count={1} />
            </div>
            <h5  className={classes.filterTitle}>Age</h5>
            <FilterDropdown options={Array(100).fill(1).map((n, i) => n + i)}/>
            <h5  className={classes.filterTitle}>State</h5>
            <FilterDropdown options={["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]}/>
            <h5  className={classes.filterTitle}>Ministry Name</h5>
            <FilterDropdown options={["Ministry of Agriculture",]}/>
            <h5 className={classes.filterTitle}>Level</h5>
            <FilterCheckBox title={"Central"} count={23} />
            <FilterCheckBox title={"State"} count={12} />
            <h5 className={classes.filterTitle}>Residence</h5>
            <FilterCheckBox title={"Both"} count={23} />
            <FilterCheckBox title={"Rural"} count={12} />
            <h5 className={classes.filterTitle}>Minority</h5>
            <FilterCheckBox title={"No"} count={23} />
            <FilterCheckBox title={"Yes"} count={2} />
            <h5 className={classes.filterTitle}>Benefit Type</h5>
            <FilterCheckBox title={"Cash"} count={23} />
            <FilterCheckBox title={"In Kind"} count={2} />
            <FilterCheckBox title={"Composite"} count={2} />
            <h5 className={classes.filterTitle}>DBT Scheme</h5>
            <FilterCheckBox title={"Yes"} count={23} />
            <FilterCheckBox title={"No"} count={3} />
            <h5 className={classes.filterTitle}>Disability Percentage</h5>
            <FilterDropdown options={Array(100).fill(5).map((n, i) => n + i)}/>
            <h5 className={classes.filterTitle}>Below Poverty Line</h5>
            <FilterCheckBox title={"Yes"} count={23} />
            <FilterCheckBox title={"No"} count={3} />
            <h5 className={classes.filterTitle}>Government Employee</h5>
            <FilterCheckBox title={"Yes"} count={23} />
            <FilterCheckBox title={"No"} count={3} />
            <h5 className={classes.filterTitle}>Employment Status</h5>
            <FilterCheckBox title={"All"} count={23} />
            <FilterCheckBox title={"Unemployed"} count={3} />
            <h5 className={classes.filterTitle}>Occupation</h5>
            <FilterCheckBox title={"All"} count={23} />
            <FilterCheckBox title={"Farmer"} count={3} />
            <FilterCheckBox title={"Fishermen"} count={3} />
            <h5 className={classes.filterTitle}>Application Mode</h5>
            <FilterCheckBox title={"Offline"} count={23} />
            <FilterCheckBox title={"Online"} count={3} />
            <FilterCheckBox title={"Online - via CSCs"} count={3} />
            </div>
        </div>

        <div className={`col-lg-9`}>
          <div class="input-group input-group-lg">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-success" type="button" id="button-addon2">
              Search
            </button>
          </div>
          <p className="mt-3">We found 41 schemes based on your preferences</p>
          <FilterResultCard/>
          <FilterResultCard/>
          <FilterResultCard/>
          <FilterResultCard/>
          <FilterResultCard/>
        </div>
      </div>
    </Fragment>
  );
};

export default Schemes;
