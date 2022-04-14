import { useState, useEffect } from "react";
import WindowTracker from "./WindowTracker";
import "./index.css";
export default function App() {
  const [show, setShow] = useState(true);
  function toggleShow() {
    setShow((prevState) => !prevState);
  }
  return (
    <div className="container">
      <button onClick={toggleShow}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
