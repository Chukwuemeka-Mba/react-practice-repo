import CounterCard from "./components/CounterCard";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <div>
      Hello Captain Hook
      <ThemeProvider>
        <CounterCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
