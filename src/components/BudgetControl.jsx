import React, { Fragment } from "react";
import {checkbudget} from '../utils/helpers'
const BudgetControl = ({budget,remaining}) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: $ {budget} </div>
      <div className={checkbudget(budget,remaining) }>Remaining budget: $ {remaining}</div>
    </Fragment>
  );
};
export default BudgetControl;
