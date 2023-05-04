import {Fragment, useContext, useEffect} from "react" 
import classNamees from "./UserProfile.module.css" 
import { AuthContext } from "../../context/auth-context";
import { getUser } from "../../api/auth-api";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const UserProfile = () => { 

    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        authContext.fetchFromLocalStorage();
        if(authContext.token==null){
            navigate("/login", {replace : true});
        }
        getUser({
            "Content-Type": "application/json",
            Authorization: `Bearer ${authContext.token}`,
        }).then((data) => {
            console.log(data);
            authContext.setUser(data.data.user);
        }
        ).catch((err) => {
            console.log(err);
        });
      },[]);

      if(authContext.token!=null){
        return <Navigate to={"/"}/>
      }
      
return (<Fragment>
 
      
   
  <div className="container-xl px-4 mt-4">
 
    <div className="row">
        <div className="col-xl-4">
          
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
               
                    <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                  
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
             
                    <button className="btn btn-primary" type="button">Upload new image</button>
                </div>
            </div>
        </div>
        <div className="col-xl-8">
         
            <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                    <form>
                  
                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="inputUsername">Username </label>
                            <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value={authContext.user.username}/>
                        </div>
                      
                        <div className="row gx-3 mb-3">
                           
                            <div className="col-md-6">
                                <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={authContext.user.firstName}/>
                            </div>
                          
                            <div className="col-md-6">
                                <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                            </div>
                        </div>
                     
                        <div className="row gx-3 mb-3">
                        
                            
                            <div className="col-md-6">
                                <label className="small mb-1" htmlFor="inputLocation">Location</label>
                                <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" />
                            </div>
                        </div>
                      
                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={authContext.user.email}/>
                        </div>
                      
                        <div className="row gx-3 mb-3">
                        
                            <div className="col-md-6">
                                <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={authContext.user.phone}/>
                            </div>
                         
                            <div className="col-md-6">
                                <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
                            </div>
                        </div>
                     
                        <button className="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

   </Fragment>); 

} 

export default UserProfile; 
