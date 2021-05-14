import React from "react";
import Expense from "./Expense";
const ExpensesList = ({ expenses }) => (
  <div className="gastos-realizados">
    <h2>Expense list</h2>
    {expenses.map((expense) => (
      <Expense 
      key={expense.id}
      expense={expense} 
      />
    ))}
  </div>
);
export default ExpensesList;
