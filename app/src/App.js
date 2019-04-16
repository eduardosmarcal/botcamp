import React, { Component } from "react";

import LoginWrapper from "./components/LoginWrapper";
import ImgBotcamp from "./components/LogoBotcamp";
import BtnBotcamp from "./components/BtnBotcamp";

import "./styles/reset.css";

class App extends Component {
  render() {
<<<<<<< HEAD
    return [
      <ImgBotcamp/>,
      <BtnBotcamp content="Entrar"/>
    ];
=======
    return (
      <LoginWrapper>
        <ImgBotcamp/>
        <BtnBotcamp>Entrar</BtnBotcamp>
      </LoginWrapper>
    );
>>>>>>> master
  }
}

export default App;