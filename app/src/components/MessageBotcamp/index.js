import styled from "styled-components";

const MessageBotcamp = styled.p`
  background-color: ${({bot}) => bot ? "#fff" : "rgba(238, 62, 37, 0.83)"};
  border-radius: ${({bot}) => bot ? "0 10px 10px 10px" : "10px 0 10px 10px" };
  color: ${({bot}) => bot ? "#333" : "#fff"};
  font-family: Roboto, sans-serif;
  margin: 0 0 20px ${({bot}) => bot ? "10px" : "auto"};
  padding: 10px 15px;
  width: 68%;
  ${({bot}) => bot && "border: 1px solid #d7d7ea"}
`;

export default MessageBotcamp;
