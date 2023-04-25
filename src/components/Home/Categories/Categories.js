import { Fragment } from "react";
import classes from "./Categories.module.css";
import { CATEGORIES } from "../../../utils/data";
import SchemeCard from "../SchemeCard/SchemeCard";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2  className="my-5 text-center">Find schemes based on categories</h2>
      <div className="row m-3">
        {CATEGORIES.map((category) => (
          <div className="col col-lg-3" key={category.schemeName}>
            <SchemeCard
            onClick={()=>navigate('/schemes/search/category/'+category.schemeName)}
              height="200px"
              name={category.schemeName}
              image = {category.image}
              schemeCount={category.schemeCount}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
