import styled from "styled-components";

const BtnBotcamp = styled.button.attrs({
  children: props => props.content 
})`
  background-color: #ee3e25;
  border-radius: 25px;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  height: 50px;
  text-transform: uppercase;
  width: 280px;
`;

export default BtnBotcamp;