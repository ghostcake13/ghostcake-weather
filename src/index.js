import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <Search />
    </div>

    <a href="https://github.com/ghostcake13/ghostcake-weather">
      This project is open sourced on Github
    </a>
  </StrictMode>
);
