import {Fragment, useContext, useEffect} from "react" 
import classes from "./UserProfile.module.css" 
import { AuthContext } from "../../context/auth-context";

const UserProfile = () => { 
    const authContext = useContext(AuthContext);
    useEffect(() => {
        authContext.fetchFromLocalStorage();
      },[authContext]);
return (<Fragment>profile </Fragment>); 

} 

export default UserProfile; 
