import {Fragment} from "react" 
import classes from "./FilterDropdown.module.css" 

const FilterDropdown = (props) => { 
  
return (<Fragment>
    <select onChange={props.onChange} className={`form-select ${classes.select}`} aria-label="Default select example" >
  <option selected>Select</option>
     {props.options.map((option) => <option className={classes.option} key={option.label} value={option.label}>{option.label}</option>)} 
    </select>
     </Fragment>); 

} 

export default FilterDropdown; 
