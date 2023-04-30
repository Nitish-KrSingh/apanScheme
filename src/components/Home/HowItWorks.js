import React from 'react'
import "../Home/HowItWorks.module.css"

const HowItWorks = () => {
    return (
    <>
            
                <div class="container">
                    <h1><b>Easy steps to apply<br/> for Government Schemes</b></h1>

                    <div class="row">

                        <div class="col-md-4 py-3 py-md-0">
                            <div class="cardbody box-shadow">
                                <i class="bi bi-clipboard2-data-fill fa-3x"></i>
                                <h3><b>Enter Details</b></h3>
                                <p>start by entering your <b> basic details!</b></p>
                            </div>
                        </div>

                        <div class="col-md-4 py-3 py-md-0">
                            <div class="cardbody box-shadow">
                                <i class="fa fa-search fa-3x" ></i>
                                <h3><b>search</b></h3>
                                <p>our search engine will<b> find the relevant schemes!</b></p>
                            </div>
                        </div>

                        <div class="col-md-4 py-3 py-md-0">
                            <div class="cardbody box-shadow">
                                <i class="bi bi-hand-index-thumb-fill fa-3x"></i>
                                <h3><b>Select & Apply</b></h3>
                                <p><b>select and apply</b>for the best suited scheme</p>
                            </div>
                        </div>
                     </div>
                    </div>
                    </>
            )
}


                    export default HowItWorks;