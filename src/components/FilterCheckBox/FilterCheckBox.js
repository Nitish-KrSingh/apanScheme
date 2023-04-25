
import classes from "./FilterCheckBox.module.css" 

const FilterCheckBox = ({title , count,onChange}) => { 

return (<div className={`form-check ${classes.filterItem}`}>
<div>
  <input
    onChange={onChange}
    className="form-check-input"
    type="checkbox"
    value=""
    id="defaultCheck1"
  />
  <label className="form-check-label" for="defaultCheck1">
    {title}
  </label>
</div>
<h5 className={classes.filterCount}>{count}</h5>
</div> ); 

} 

export default FilterCheckBox; 
