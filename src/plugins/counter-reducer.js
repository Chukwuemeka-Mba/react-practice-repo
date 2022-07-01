export const initialState = {
  count: 0,
  darkTheme: false,
};
export const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      if (state.count > 0) return { ...state, count: state.count - 1 };
      break;
    case "reset":
      return { ...state, count: (state.count = 0) };

    case "toggleTheme":
      return { ...state, darkTheme: (state.darkTheme = !state.darkTheme) };

    default:
      throw new Error();
  }
};
