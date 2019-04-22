import React from 'react';
import { Link } from 'react-router-dom';

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import MessageWrapper from "../../components/MessageWrapper";
import UserMessage from "../../components/UserMessage";
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
      <UserMessage/>
    </MessageWrapper>
    <InputMessage/>
  </>
);

export default Chat;