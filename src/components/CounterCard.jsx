import { useContext } from "react";
import { CounterContext } from "../context/theme-context";

function CounterCard() {
  const counterContext = useContext(CounterContext);

  const themeStyles = {
    backgroundColor: counterContext.countState.darkTheme ? "#000" : "#ccc",
    color: counterContext.countState.darkTheme ? "#ccc" : "#000",
    padding: "1rem",
    margin: "1rem",
  };
  return (
    <div className="card card-body">
      <div style={themeStyles}>
        <p>Is this your Theme?</p>
        <p>{counterContext.countState.count}</p>
      </div>

      <button
        className="btn btn-dark"
        onClick={() => counterContext.countDispatch("toggleTheme")}
      >
        {!counterContext.countState.darkTheme ? "No" : "Yes"}
      </button>
      <div className="d-flex flex-row gap-1">
        <button
          className="btn btn-success"
          onClick={() => counterContext.countDispatch("increment")}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => counterContext.countDispatch("decrement")}
        >
          Decrement
        </button>
        <button
          className="btn btn-primary"
          onClick={() => counterContext.countDispatch("reset")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterCard;
