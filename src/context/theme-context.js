import { createContext, useReducer } from "react";
import { initialState, reducer } from "../plugins/counter-reducer";
export const CounterContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider
      value={{ countState: state, countDispatch: dispatch }}
    >
      {children}
    </CounterContext.Provider>
  );
};
