import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  localStorage.setItem("darkMode", darkMode);

  const darkModeHandler = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);

    console.log(darkMode);
  };

  return (
    <div className="App">
      <div className="darkModeToggler">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" onClick={(e) => darkModeHandler(e)}>
            {" "}
          </span>
        </label>
      </div>

      <header
        className="App-header"
        style={{
          backgroundColor: `${darkMode ? "black" : "white"}`,
        }}
      >
        <Home />
      </header>
    </div>
  );
}

export default App;
