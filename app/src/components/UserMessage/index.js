import styled from "styled-components";

const UserMessage = styled.input.attrs({
    type: 'text'
})`
    background-color: rgba(238, 62, 37, 0.83);
    border: none;
    border-radius: 16px;
    border-top-right-radius: 0;
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    height: 20px;
    width: 257px;
`;

export default UserMessage;