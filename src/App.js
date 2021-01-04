import React, { useState } from "react"
import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login"
import "./CSS/App.css"

function App () {
  let whichPage = "Dashboard"

  const renderPage = () => {
    switch (whichPage){
      case "Dashboard":
        return <Dashboard/>
      case "Login":
        return <Login/>
      default:
        return <Login/>
    }
  }

  console.log("whichPage is ")
  console.log(whichPage)

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
