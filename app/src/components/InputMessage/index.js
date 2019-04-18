import styled from 'styled-components';

const InputMessage = styled.input.attrs({
  type: 'text',
  placeholder: 'Diz aí...'
})`
  background-color: #fbfbff;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border: none;
  color: rgba(0, 0, 0, 0.33);
  font-size: 20px;
  padding: 14px 11px 14px 16px;
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100vw;
`;

export default InputMessage;