import { useState, useEffect } from "react";
import reactLogo from "../public/assets/react.svg";
import viteLogo from "../public/assets/vite.svg";
import "./App.css";

function App() {
  const [query, setQuery] = useState("Hello World! ");
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");

  const fetchWithRefresh = async () => {
    const response = await fetch(
      `http://localhost:8080/repeat?text=${query}&count=${count}`,
    );
    const data = await response.json();
    setResult(data.result.join("\n"));
    console.log(data);
  };

  useEffect(() => {
    fetchWithRefresh();
  }, [count, query]);

  return (
    <>
      <div className="flex flex-row items-center justify-center mb-8 gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p> = </p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <input
          type="text"
          className="card my-4 text-center overflow-scroll bg-gray-100 text-black border-2 border-black rounded-md p-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <p>{result}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
