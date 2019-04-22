import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #26265e;
  padding: 10px 16px;
  position: relative;
  display: flex;
  justify-content: space-between;

  ::after {
    content: "";
    border-top: 14px solid #26265e;
    border-left: 100vw solid transparent;    
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }
`;

export default HeaderWrapper;