import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MoviesContextProvider from "./context/movieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MoviesContextProvider>
    <App />
  </MoviesContextProvider>
);
