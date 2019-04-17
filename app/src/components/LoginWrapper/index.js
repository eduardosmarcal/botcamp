import styled from "styled-components";

import background from "../../img/ecossistema-background.svg";

const LoginWrapper = styled.main`
  align-items: center;
  background-image: url(${background});
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  padding-top: 120px;
  padding-bottom: 80px;
  justify-content: space-between;
  width: 100vw;
`;

export default LoginWrapper;