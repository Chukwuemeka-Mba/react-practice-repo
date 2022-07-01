import { useTheme, useThemeUpdate } from "../context/theme-context";

function ThemeCard() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#000" : "#ccc",
    color: darkTheme ? "#ccc" : "#000",
    padding: "1rem",
    margin: "1rem",
  };
  return (
    <div>
      <p style={themeStyles}>Is this your Theme?</p>

      <button className="btn btn-dark" onClick={toggleTheme}>
        {!darkTheme ? "No" : "Yes"}
      </button>
    </div>
  );
}

export default ThemeCard;
