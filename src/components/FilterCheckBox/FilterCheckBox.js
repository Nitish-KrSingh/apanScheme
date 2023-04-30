
import classes from "./FilterCheckBox.module.css" 

const FilterCheckBox = ({title , count,onChange,identifier,checked}) => { 

return (<div className={`form-check ${classes.filterItem}`}>
<div>
  <input
    onChange={(event=>onChange(event,identifier))}
    className="form-check-input"
    type="checkbox"
    value={title}
    checked={checked}
    id="defaultCheck1"
  />
  <label className="form-check-label" htmlFor="defaultCheck1">
    {title}
  </label>
</div>
<h5 className={classes.filterCount}>{count}</h5>
</div> ); 

} 

export default FilterCheckBox; 
