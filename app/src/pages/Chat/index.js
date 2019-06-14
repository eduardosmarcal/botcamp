import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import MessageWrapper from "../../components/MessageWrapper";
import MessageBotcamp from "../../components/MessageBotcamp";
import InputMessage from "../../components/InputMessage";
// import AvatarMessage from '../../components/AvatarMessage';
import FormMessage from '../../components/FormMessage';

const Chat = () => {
  const [typing, setTyping] = useState("");
  const [messages, setMessages] = useState([]);
  
  const handleSubmit = event => {
    event.preventDefault();

    setMessages([...messages, typing]);
    setTyping("");
  }
  
  const handleChange = event => setTyping(event.target.value);

  return (
    <>
      <HeaderWrapper>
        <LogoBotcamp small />
        <Link to="/">
          <LogoutBotcamp />
        </Link>
      </HeaderWrapper>
      
      <MessageWrapper>
        {messages.map((msg, key) => <MessageBotcamp key={key}>{msg}</MessageBotcamp>)}
      </MessageWrapper>
      
      <FormMessage onSubmit={handleSubmit}>
        <InputMessage value={typing} onChange={handleChange} />
      </FormMessage>
    </>
  )
};

export default Chat;