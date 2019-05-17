import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from "./pages/Login";
import Chat from "./pages/Chat";

import "./styles/reset.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/chat" exact component={Chat} />
          <Redirect from="*" exact to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;