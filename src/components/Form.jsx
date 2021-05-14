import React, { useState } from "react";
import {generate} from 'shortid'
import Error from "./Error";
const Form = ({addNewExpense}) => {
  const [expenseName, setExpenseName] = useState("");
  const [amountSpent, setAmountSpent] = useState(0);
  const [error, seterror] = useState(false);
  /*    const handleChange=(e)=>{
        setExpenseName(
            e.target.value,
        )
        setAmountSpent(parseInt(e.target.value),10)
    }*/

  const addExpense = (e) => {

    //validate
    e.preventDefault();
    if (amountSpent < 1 || isNaN(amountSpent) || 
    expenseName.trim() === "") {
      seterror(true);
      return;
    }
    seterror(false);

    //build spending
    const spent={
        expenseName,
        amountSpent,
        id:generate()
    }

    addNewExpense(spent)

    //reset Form
    setExpenseName('')
    setAmountSpent(0)
  };

  return (
    <form onSubmit={addExpense}>
      <div className="Campo">
        <h2>Add your expenses here</h2>
        {error ? (
          <Error message="Both fields are required or expense is wrong" />
        ) : null}
        <label>Expense name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="example: Food"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>
      <div className="Campo">
        <label>Expense amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="example: 50"
          value={amountSpent}
          onChange={(e) => setAmountSpent(parseInt(e.target.value), 10)}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width "
        value="add expense"
      />
    </form>
  );
};
export default Form;
