import {Fragment} from "react" 
import classes from "./SchemeCard.module.css" 

const SchemeCard = ({image , name, schemeCount,height = "180px"}) => { 

return ( <div className={`card card-body shadow rounded mx-1 my-2 ${classes.schemeCard}`} style={{height : height}}>
<img className="img" width={60} src="https://cdn.myscheme.in/images/categories/Banking,Financial%20Services%20and%20Insurance.svg" alt={name}/>
<p className="card-text mt-3">{schemeCount} Schemes</p>
<h5 className="card-title">{name}</h5>
</div>); 

} 

export default SchemeCard; 
