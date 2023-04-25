import {Fragment, useState} from "react" 
import classes from "./Home.module.css" 
import bg from "../../assets/images/bg.jpg"
import {ReactComponent as RightNavigation} from "../../assets/images/right.svg"
import Categories from "./Categories/Categories"
import States from './States/States';
import Ministries from "./Ministries/Ministries"
import { useNavigate } from "react-router-dom"
import Footer from "../Footer/Footer
import HowItWorks from "../Home/HowItWorks"
import Page from "./Page/Page";
const Home = () => {
    const [schemeFilter ,setSchemeFilter] = useState('categories');
    const navigate = useNavigate();

    const categoriesOnClickHandler = () =>{
      setSchemeFilter('categories');
    }
    const stateOnClickHandler=()=>{
      setSchemeFilter('states')
    }
    const ministriesOnClickHandler = () =>{
      setSchemeFilter('ministries');
    }

    const filterform = () =>{
      navigate('/filterform')
    }

    return (<>
      <div className={`${classes.homeBackground}`}
      style={{backgroundImage : `url(${bg})`,}}
      >
    
    <div className="row">
      <div className={`col-lg-6 `}>
      <div className={`${classes.homeSection}`}>
      <h3 className={classes.title}>Scheme Offered <br/>by Government</h3>
        <p className={classes.subTitle}>Explore Government Schemes here<br/>and check your eligibility</p>
        <button onClick={filterform} className={classes.getSchemeBtn}>Get Your Scheme <RightNavigation/> </button>
      </div>
      </div>
      <div className="col-lg-6">
        
      </div>
    </div>
  </div>
  <div className={classes.categories}>
      <div className={classes.filterOptions}>
        <button className={`btn  ${schemeFilter === 'categories' ? 'btn-success' : 'btn-light'}`} onClick={categoriesOnClickHandler}>Categories</button>
        <button className={`btn  ${schemeFilter === 'states' ? 'btn-success' : 'btn-light'}`} onClick={stateOnClickHandler}>States/UTs</button>
        <button className={`btn  ${schemeFilter === 'ministries' ? 'btn-success' : 'btn-light'}`} onClick={ministriesOnClickHandler}>Central Ministries</button>
      </div>
      <div className="container">
        {schemeFilter === 'categories' && <Categories/>}
        {schemeFilter === 'states' && <States/>}
        {schemeFilter === 'ministries' && <Ministries/>}
      </div>

      <Page />
      <Footer/>
  </div>
  
  </>
    )
}

export default Home;