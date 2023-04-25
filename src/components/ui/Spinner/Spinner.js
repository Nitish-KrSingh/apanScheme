import {Fragment} from "react" 
import classes from "./Spinner.module.css" 

const Spinner = () => { 

return (<div className="spinner-border" role="status">
<span className="visually-hidden">Loading...</span>
</div>); 

} 

export default Spinner; 
