import {Fragment} from "react" 
import classes from "./FilterResultCard.module.css" 

const FilterResultCard = () => { 

return (<div className="card card-body shadow-sm rounded">
        <p>Ministry Of Agriculture and Farmers Welfare</p>
        <h3>Pradhan Mantri Kisan Samman Nidhi</h3>
        <p>Farmer welfare scheme by Ministry of Agriculture and Farmers Welfare to provide income support to all landholding farmers' families in the country to supplement their financial needs for procuring various inputs related to agriculture and
             allied activities as well as domestic needs.</p>
             <div className="d-inline-flex" style={{gap : '5px'}}>
             <span className={classes.badge} >Agricultural Inputs</span>
             <span className={classes.badge}>Agricultural</span>
             </div>
             
     </div>); 

} 

export default FilterResultCard; 
