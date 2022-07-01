import { useState, createContext } from "react";
import ThemeCard from "./components/ThemeCard";
function App() {
  const ThemeContext = createContext();

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div>
      Hello Captain Hook
      <ThemeCard />
    </div>
  );
}

export default App;
