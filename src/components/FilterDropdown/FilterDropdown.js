import {Fragment} from "react" 
import classes from "./FilterDropdown.module.css" 

const FilterDropdown = ({options}) => { 

return (<Fragment>
    <select class="form-select" aria-label="Default select example" className={classes.select}>
  <option selected>Select</option>
    {options.map((option) => <option className={classes.option} key={option} value={option}>{option}</option>)}
    </select>
     </Fragment>); 

} 

export default FilterDropdown; 
