import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount(count + 1);
  }

  function resetear() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador en React</h1>
      <p style={{ fontSize: "2rem" }}>{count}</p>

      <button onClick={incrementar} style={{ marginRight: "10px" }}>
        + 1
      </button>

      <button onClick={resetear}>Reset</button>
    </div>
  );
}

export default App;
