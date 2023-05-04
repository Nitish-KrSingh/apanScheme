import React, { useEffect , useState } from 'react';
import {useNavigate , useSearchParams ,   } from "react-router-dom"
import { getSchemeDetailsApi } from '../../api/scheme-api';
import Spinner from '../ui/Spinner/Spinner';




const SchemesDetails = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect( ()=>{

        const slug = searchParams.get("slug");
        const id = searchParams.get("id");

        getSchemeDetailsApi(slug).then((responce)=>{
            console.log(responce.data)
        setdata(responce.data);
        }).catch((error)=>{
            console.log(error)

        })

                console.log(searchParams);

    } , []) ;

    return (
    <>
      { data === null ?
        <p> <Spinner/> </p>
        :
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="position-fixed d-grid gap-3 mt-3 ">
                        <a className="btn btn-outline-success btn-block" onClick={()=>navigate(-1)} >Back</a>
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
                            {data.pageProps.schemeData.en.basicDetails.nodalMinistryName.label}
                            </div>

                            <div className="card-body">

                                <h5 className="card-title">{data.pageProps.schemeData.en.basicDetails.schemeName}</h5>

                                <div className="card-body" id="Details">
                                <a className="btn btn-outline-success btn-block" href={data.pageProps.schemeData.en.schemeContent.references[0].url}>Download PDF</a>
                                    <h3 className="card-title">Details</h3>
                                    <h5>Objective </h5>
                                    <p className="card-text"></p>
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


                 


                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
      }
    </>
    )
}

export default SchemesDetails;