import React from 'react';
import {useNavigate} from "react-router-dom"


const SchemesDetails = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="position-fixed d-grid gap-3 mt-3 ">
                        <a className="btn btn-outline-success btn-block" onClick={()=>navigate(-1)} > --Back</a>
                        <a className="btn btn-outline-success btn-block" href="#Details">Details</a>
                        <a className="btn btn-outline-success btn-block" href="#Benefits">Benefits</a>
                        <a className="btn btn-outline-success btn-block" href="#Eligibility">Eligibility</a>
                        <a className="btn btn-outline-success btn-block" href="#Exclusions">Exclusions</a>
                        <a className="btn btn-outline-success btn-block" href="#ApplicationProcess">Application Process</a>
                        <a className="btn btn-outline-success btn-block" href="#DocumentsRequired">Documents Required</a>
                        <a className="btn btn-outline-success btn-block" href="#SourcesAndReferences">Sources And References</a>
                    </div>
                    </div>
                    <div className="col-md-8 mt-3">

                        <div className="card">

                            <div className="card-header">
                                Ministry Of Agriculture and Farmers Welfare
                            </div>

                            <div className="card-body">

                                <h5 className="card-title">Pradhan Mantri Kisan Samman Nidhi</h5>

                                <div className="card-body" id="Details">
                                    <h3 className="card-title">Details</h3>
                                    <h5>Objective </h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Benefits">
                                    <h5 className="card-title">Benefits</h5>
                                    <p className="card-text">Financial benefit of Rs. 6000 per annum per family payable in three equal installments of Rs 2000 each, every four months.</p>
                                </div>

                                <div className="card-body" id="Eligibility">
                                    <h5 className="card-title">Eligibility</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Exclusions">
                                    <h5 className="card-title">Exclusions</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>


                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>


                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                                 <div className="card-body" id="Details">
                                    <h5 className="card-title">Card title 2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SchemesDetails;