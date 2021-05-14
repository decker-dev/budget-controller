import React, { useState } from 'react'

import Question from './components/Question'
function App() {
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido contenido-principal">
      <Question
      setBudget={setBudget}
      setRemaining={setRemaining}
      />
      </div>
      
    </div>
  );
}

export default App;
