import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import ExpensesList from "./components/ExpensesList";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [seeQuestion, updateQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);

  const addNewExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

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
          ) : null}

          <div className="row">
            <div className="one-half column">
              <Form addNewExpense={addNewExpense} />
            </div>
            <div className="one-half column">
              <ExpensesList 
              expenses={expenses}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
