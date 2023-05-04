import React from 'react'
import "../Home/HowItWorks.css"

const HowItWorks = () => {
    return (
    <>
            
                <div className="container">
                    <br />
                    <hr />
                    <br />
                    <h1><b>Easy steps to apply<br/> for Government Schemes</b></h1>

                    <div className="row">

                        <div className="col-md-4 py-3 py-md-0">
                            <div className="cardbody box-shadow">
                                <i className="bi bi-clipboard2-data-fill fa-3x"></i>
                                <h3><b>Enter Details</b></h3>
                                <p>Start by entering your <b> basic details!</b></p>
                            </div>
                        </div>

                        <div className="col-md-4 py-3 py-md-0">
                            <div className="cardbody box-shadow">
                                <i className="fa fa-search fa-3x" ></i>
                                <h3><b>Search</b></h3>
                                <p>Our search engine will<b> find the relevant schemes!</b></p>
                            </div>
                        </div>

                        <div className="col-md-4 py-3 py-md-0">
                            <div className="cardbody box-shadow">
                                <i className="bi bi-hand-index-thumb-fill fa-3x"></i>
                                <h3><b>Select & Apply</b></h3>
                                <p><b>Select and apply</b>for the best suited scheme</p>
                            </div>
                        </div>
                     </div>
                    </div>
                    </>
            )
}


                    export default HowItWorks;
