import React, { useState } from "react";
import "./App.css";
import Login from "./login";
import Dashboard from "./dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
