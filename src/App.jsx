import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount(count + 1);
  }

  function decrementar() {
    setCount(count - 1);
  }

  function doble() {
    setCount(count * 2);
  }

  function mitad() {
    setCount(count / 2);
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

      <button onClick={decrementar} style={{ marginRight: "10px" }}>
        - 1
      </button>

      <button onClick={doble} style={{ marginRight: "10px" }}>
        doble
      </button>

      <button onClick={mitad} style={{ marginRight: "10px" }}>
        mitad
      </button>

      <button onClick={resetear}>Reset</button>
    </div>
  );
}

export default App;
