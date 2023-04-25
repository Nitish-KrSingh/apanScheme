import { Fragment } from "react";
import classes from "./Ministries.module.css";
import { CENTRAL_MINISTRIES } from "../../../utils/data";
import SchemeCard from "../SchemeCard/SchemeCard";
import { useNavigate } from "react-router-dom";

const Ministries = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="my-5 text-center">Explore schemes of Central Ministries</h2>
      <div className="row m-3">
        {CENTRAL_MINISTRIES.map((ministries) => (
          <div  className="col col-lg-3" key={ministries.Ministries}>
            <SchemeCard
             onClick={()=>navigate('/schemes/search/ministry/'+ministries.Ministries)}
              name={ministries.Ministries}
              height="210px"
              image = {ministries.image}
              schemeCount={ministries.schemeCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministries;
