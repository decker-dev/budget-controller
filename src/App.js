import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import ExpensesList from "./components/ExpensesList";
import BudgetControl from "./components/BudgetControl";
function App() {
  //define State
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [seeQuestion, updateQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, serCreateExpense] = useState(false);
  useEffect(() => {
    if (createExpense) {
      setExpenses([...expenses, expense]);
    }

    //discount from the budget
    const budgetRemaining=remaining-expense.amountSpent
    setRemaining(budgetRemaining)
    serCreateExpense(false)
  }, [expense]);

  return (
    <div className="container">
      <header>
        <h1>Weekly Expense</h1>

        <div className="contenido contenido-principal">
          {seeQuestion ? (
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  serCreateExpense={serCreateExpense}
                />
              </div>
              <div className="one-half column">
                <ExpensesList expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
