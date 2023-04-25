import { Fragment } from "react";
import classes from "./States.module.css";
import { STATES } from "../../../utils/data";
import SchemeCard from "../SchemeCard/SchemeCard";

const States = () => {
  return (
    <div className="container">
      <h2 className="my-5 text-center">Explore schemes of States/UTs</h2>
      <div className="row m-3">
        {STATES.map((state) => (
          <div className="col col-lg-3" key={state["States/UTs"]}>
            <SchemeCard
              name={state["States/UTs"]}
              image = {state.image}
              schemeCount={state.schemeCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default States;
