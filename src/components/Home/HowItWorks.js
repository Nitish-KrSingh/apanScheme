import React from 'react'
import "../Home/HowItWorks.module.css"

const HowItWorks = () => {
    return(
    <>
    <containter>
     <div className="container">
    <h1 style="text-align: center;"><b>Easy steps to apply<br/> for Government Schemes</b></h1>
    <div className="row">
        <div className="col-md-4 py-3 py-md-0">
         <div className="cardbody1 box-shadow"  style="height: 300px; width: 200px; margin:50px; padding: 40px">
            <i className="bi bi-clipboard2-data-fill fa-3x"></i>    
            <h3 style="color: rgb(22, 210, 22);"><b>Enter Details</b></h3>
                <p>start by entering your <b> basic details!</b></p>
            </div>
           </div> 
        <div className="col-md-4 py-3 py-md-0">
         <div className="cardbody2 box-shadow" style="height: 300px; width: 200px; margin:50px; padding: 40px">
            <i className="fa fa-search fa-3x"  style=" height: 100px; width: 80px; "> </i>
            <h3 style="color: rgb(22, 210, 22);"><b>search</b></h3>
                <p>our search engine will<b> find the relevant schemes!</b></p>
            </div>
           </div> 
           <div className="col-md-4 py-3 py-md-0">
            <div className="cardbody3 box-shadow" style="height: 300px; width: 200px; margin:50px; padding: 40px">
                <i className="bi bi-hand-index-thumb-fill fa-3x"></i>
               <h3 style="color: rgb(22, 210, 22);"><b>Select & Apply</b></h3>
                   <p><b>select and apply</b>for the best suited scheme</p>
               </div>
              </div> 
              </div>
              </div>
              </containter>
        </>
    )
}


export default HowItWorks;