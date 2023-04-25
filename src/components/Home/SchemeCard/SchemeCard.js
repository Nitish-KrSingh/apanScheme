import {Fragment} from "react" 
import classes from "./SchemeCard.module.css" 

const SchemeCard = ({image , name, schemeCount,height = "180px",onClick = ()=>{}}) => { 


return ( <div onClick={onClick} className={`card card-body shadow rounded mx-1 my-2 ${classes.schemeCard}`} style={{height : height}}>
<img className="img" width={60} src={image} alt={name}/>
<p className="card-text mt-3">{schemeCount} Schemes</p>
<h5 className="card-title">{name}</h5>
</div>); 

} 

export default SchemeCard; 
