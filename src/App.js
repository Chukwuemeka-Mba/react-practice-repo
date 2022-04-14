import { useState, useEffect } from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);
  console.log("Component Rendered");
  useEffect(
    function () {
      console.log("Use Effect Rendered");
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );
  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button
        type="submit"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Add Count
      </button>
    </div>
  );
}
