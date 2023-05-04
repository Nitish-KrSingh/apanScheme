import React, { useEffect , useState } from 'react';
import {useNavigate , useSearchParams ,   } from "react-router-dom"
import { getSchemeDetailsApi } from '../../api/scheme-api';
import Spinner from '../ui/Spinner/Spinner';
import classes from './SchemesDetails.module.css';



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

    const details = data!== null ? <div> {data.pageProps.schemeData.en.schemeContent.detailedDescription.map((data)=>{
            if(data.type==='heading_four'){
                return <h5 className={`${classes.detailTitle} card-title`}>{data.children[0].text}</h5>
            }else if(data.type==='paragraph'){
                return <p className={classes.details}>{data.children[0].text}</p>
            }else if(data.type==='ol_list'){
                return <ol className={classes.orderedList}>{data.children.map((d)=>{
                    if(d.children[0].text===''){
                        return <span></span>
                    }
                    return <li>{d.children[0].text}</li>
                })}</ol>
            }else{
                return <span></span>
            }

    })}
    </div> : <p> <Spinner/> </p>;

    const benefits = data!== null ? <p> {data.pageProps.schemeData.en.schemeContent.benefits.map((data)=>{
       if(data.type==='paragraph'){
                return data.children.map(d=>{
                    if(d.bold){
                        return <strong> <span  className={classes.details}>{d.text}</span></strong>;
                    }else{
                        return <span  className={classes.details}>{d.text}</span>;
                    }
                })
            }
    })}</p> : <p> <Spinner/> </p>; 

    const applicationProcess  = data!== null ? <> {data.pageProps.schemeData.en.applicationProcess.map((data)=>{
        return <> <h4 >{data.mode}</h4> {data.process.map(d=>{
                if(d.type==='ol_list'){
                    return <ol className={classes.orderedList}>{d.children.map((d)=>{
                        if(d.type === 'ol_list'){
                            return <ol className={classes.orderedList}>{d.children.map((d)=>{
                                if(d.children[0].text===''){
                                    return <span></span>
                                }
                                return <li>{d.children[0].text}</li>
                            })}</ol>
                        }
                        if(d.children[0].text===''){
                            return <span></span>
                        }
                        return <li>{d.children[0].text}</li>
                    })}</ol>
                }else if(d.type==='list_item'){
                    return <li className={classes.listItem}>{d.children[0].text}</li> 
                }else{
                    return <span></span>
                }
        })}</>;

    })}</> : <p> <Spinner/> </p>;

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

                              
                                    
                              
                                 <h2 className={`${classes.detailTitle} mt-3`}>Details</h2>
                                    <hr/>
                                {details}

                                <h4 className={`${classes.detailTitle} mt-3`}>Benefits</h4>
                                {benefits}
                                
                               <a href=''> <h4 className={`${classes.detailTitle} mt-3`}>Application Process</h4></a>
                                {applicationProcess}

                                <div className='h-stack'>
                                <a className="btn btn-lg btn-outline-success mx-3" href={data.pageProps.schemeData.en.schemeContent.references[0].url}>Download PDF</a>

                                   
                                <a className='btn btn-lg btn-primary ' rel="noreferrer" target='_blank' href={data.pageProps.schemeData.en.applicationProcess[0].url}>Apply Now</a>
                          
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