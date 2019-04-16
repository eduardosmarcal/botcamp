import React, { Component } from "react";
import ImgBotcamp from "./components/ImgBotcamp";
import BtnBotcamp from "./components/BtnBotcamp";
import "./App.css"

class App extends Component {
  render() {
    return [
      <ImgBotcamp/>,
      <BtnBotcamp content="Entrar"/>
    ];
  }
}

export default App;