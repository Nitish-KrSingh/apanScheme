import {Fragment} from "react" 
import classes from "./FilterResultCard.module.css" 
import {useNavigate} from "react-router-dom"

const FilterResultCard = ({fields , id}) => { 
        const navigate = useNavigate();
return (<div className="card card-body shadow-sm rounded">
        <p>{fields.nodalMinistryName}</p>
        <h3>{fields.schemeName}</h3>
        <p>{fields.briefDescription}</p>
             <div className="d-inline-flex" style={{gap : '5px'}}>
             {fields.tags.map((t,i)=>   <span className={classes.badge} key={i}>{t}</span>)}
             <button type="button" className="btn btn-outline-success btn-block"  onClick={()=>navigate("/SchemesDetails?slug="+fields.slug+"&id="+id)}>More details</button>
             </div>
            
     </div>); 

} 

export default FilterResultCard; 
