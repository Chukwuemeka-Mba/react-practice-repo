import CounterCard from "./components/CounterCard";
import DoughnutChart from "./components/DoughnutChart";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <div>
      Hello Captain Hook
      <ThemeProvider>
        <CounterCard />
      </ThemeProvider>
      <DoughnutChart />
    </div>
  );
}

export default App;
