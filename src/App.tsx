import "./App.css";
import { useCounterStore } from "./stores/counter";

function App() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <>
      <div className="card">
        <p>count: {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    </>
  );
}

export default App;
