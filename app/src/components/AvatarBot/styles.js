import styled from "styled-components"
import avatar from "../../img/avatar.svg"

export const Wrapper = styled.figure`
    align-items: center;
    background-color: #26265e;
    border-radius: 50%;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
`;

export const Avatar = styled.img.attrs({src: avatar})``;