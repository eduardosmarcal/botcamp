import styled from "styled-components";

import logoBotcamp from "./../../img/botcamp.svg";

const LogoBotcamp = styled.img.attrs({
  src: `${logoBotcamp}`,
  alt: "Logo do BotCamp"
})`
  display: block;
  margin: 0 auto;
  width: 248px;
`;

export default LogoBotcamp;