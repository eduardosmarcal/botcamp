import React from 'react';
import { Link } from 'react-router-dom';

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import MessageWrapper from "../../components/MessageWrapper";
import MessageBotcamp from "../../components/MessageBotcamp";
import InputMessage from "../../components/InputMessage";

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp small/>
      <Link to="/">
        <LogoutBotcamp/>
      </Link>
    </HeaderWrapper>
    <MessageWrapper>
      <MessageBotcamp>!cpf</MessageBotcamp>
    </MessageWrapper>
    <InputMessage/>
  </>
);

export default Chat;