import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="Supervisor"
        copy="Monitors activity to identify project roadblocks"
        icon={{
          url: `${process.env.PUBLIC_URL}/images/icon-supervisor.svg`,
          alt: "supervisor",
        }}
      />
    </div>
  );
}

export default App;
