import ThemeCard from "./components/ThemeCard";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <div>
      Hello Captain Hook
      <ThemeProvider>
        <ThemeCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
