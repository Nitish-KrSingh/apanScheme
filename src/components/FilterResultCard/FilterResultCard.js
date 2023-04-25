import {Fragment} from "react" 
import classes from "./FilterResultCard.module.css" 

const FilterResultCard = ({fields}) => { 

return (<div className="card card-body shadow-sm rounded">
        <p>{fields.nodalMinistryName}</p>
        <h3>{fields.schemeName}</h3>
        <p>{fields.briefDescription}</p>
             <div className="d-inline-flex" style={{gap : '5px'}}>
             {fields.tags.map(t=>   <span className={classes.badge} >{t}</span>)}
             </div>
             
     </div>); 

} 

export default FilterResultCard; 
