import React from "react";
import Card from "react-bootstrap/Card";
import "./App.css";
import Home from "./components/Home";
import Top from "./components/templates/Top";
import Bottom from "./components/templates/Bottom";
import Chisbot from "./components/chis-bot/Chisbot";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div class="App">
      <Top />
      <Card className="col-11 mx-auto">
        <Router>
          <Switch>
            <Route path="/chis-bot">
              <Chisbot />
            </Route>
            <Route path="/users">
              {/* <Users /> */}
              <p>users</p>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Card>
      <Bottom />
    </div>
  );
}

export default App;
