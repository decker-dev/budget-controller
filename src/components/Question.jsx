import React, { Fragment, useState } from "react";
import Error from './Error'
const Question = () => {
  const [amount, setamount] = useState(0);
  const [error, seterror] = useState(false)
  const setBudget = (e) => {
    setamount(parseInt(e.target.value, 10));
  };
  const addBudget = (e) => {
    e.preventDefault();
    if(amount<1||isNaN(amount)){
      seterror(true)
      return
    }
    seterror(false)
  };
  return (
    <Fragment>
      <h2>Insert your budget</h2>
      {error? <Error
      message="The budget is wrong"
      /> :null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Budget"
          onChange={setBudget}
        />
        <br />
        <input
          type="submit"
          className=" button-primary u-full-width"
          value="Define budget"
        />
      </form>
    </Fragment>
  );
};
export default Question;
