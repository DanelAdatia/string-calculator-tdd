import { useState } from "react";
import { add } from './utils/add';
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      setError(null);
      const calcResult = add(input);
      setResult(calcResult);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <h1>String Calculator</h1>
      <div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers here"
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {result !== null && !error && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
