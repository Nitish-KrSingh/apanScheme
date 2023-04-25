import {Fragment} from "react" 
import classes from "./SchemeCard.module.css" 

const SchemeCard = ({image , name, schemeCount,height = "180px",onClick = ()=>{}}) => { 



return ( <div className={`card card-body shadow rounded mx-1 my-2 ${classes.schemeCard}`} style={{height : height}}>
<img className="img" width={50} src={image} alt={name}/>

<p className="card-text mt-3">{schemeCount} Schemes</p>
<h6 className="card-title mt-3">{name}</h6>
</div>); 

} 

export default SchemeCard; 
