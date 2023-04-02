import {Fragment, useState} from "react" 
import classes from "./Home.module.css" 
import bg from "../../assets/images/bg.jpg"
import {ReactComponent as RightNavigation} from "../../assets/images/right.svg"
import Categories from "./Categories/Categories"
import States from './States/States';
import Ministries from "../Ministries"
const Home = () => {
    const [schemeFilter ,setSchemeFilter] = useState('categories');
    
    const categoriesOnClickHandler = () =>{
      setSchemeFilter('categories');
    }
    const stateOnClickHandler=()=>{
      setSchemeFilter('states')
    }
    const ministriesOnClickHandler = () =>{
      setSchemeFilter('ministries');
    }
    return (<>
      <div className={`${classes.homeBackground}`}
      style={{backgroundImage : `url(${bg})`,}}
      >
    
    <div className="row">
      <div className={`col-lg-6 `}>
      <div className={`${classes.homeSection}`}>
      <h3 className={classes.title}>Scheme Offered <br/>Government</h3>
        <p className={classes.subTitle}>Explore Government Schemes here<br/>and check your eligibility</p>
        <button className={classes.getSchemeBtn}>Get Your Scheme <RightNavigation/> </button>
      </div>
      </div>
      <div className="col-lg-6">
        
      </div>
    </div>
  </div>
  <div className={classes.categories}>
      <div className={classes.filterOptions}>
        <button className={`btn  ${schemeFilter === 'categories' ? 'btn-primary' : 'btn-light'}`} onClick={categoriesOnClickHandler}>Categories</button>
        <button className={`btn  ${schemeFilter === 'states' ? 'btn-primary' : 'btn-light'}`} onClick={stateOnClickHandler}>States/UTs</button>
        <button className={`btn  ${schemeFilter === 'ministries' ? 'btn-primary' : 'btn-light'}`} onClick={ministriesOnClickHandler}>Central Ministries</button>
      </div>
      <div className="container">
        {schemeFilter === 'categories' && <Categories/>}
        {schemeFilter === 'states' && <States/>}
        {schemeFilter === 'ministries' && <Ministries/>}
      </div>
  </div>
  </>
    )
}

export default Home;