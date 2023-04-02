
import classes from "./FilterCheckBox.module.css" 

const FilterCheckBox = ({title , count}) => { 

return (<div class={`form-check ${classes.filterItem}`}>
<div>
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="defaultCheck1"
  />
  <label class="form-check-label" for="defaultCheck1">
    {title}
  </label>
</div>
<h5 className={classes.filterCount}>{count}</h5>
</div> ); 

} 

export default FilterCheckBox; 
