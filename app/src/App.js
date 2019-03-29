import React, { Component } from "react";

import ImgBotcamp from "./components/LogoBotcamp";
import BtnBotcamp from "./components/BtnBotcamp";

import "./styles/reset.css";

class App extends Component {
  render() {
    return (
      <>
        <ImgBotcamp/>
        <BtnBotcamp/>
      </>
    );
  }
}

export default App;