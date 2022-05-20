import React from "react";
import "./App.scss";
import PrintMovies from "./components/PrintMovies";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PrintMovies></PrintMovies>
    </div>
  );
}

export default App;
