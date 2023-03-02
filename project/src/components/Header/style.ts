import styled from "styled-components";

export const Container = styled.header`
  
  z-index: 1;
  inset: 9999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffff;
  padding: 3%;
  width: 100vw;
  height: 4rem;
  border-bottom: 2px solid #dee2e6;

  .menuMobileHeader {
    position: absolute;
    top: 50px;
    right: 0px;
  }
  .menuDesktop {
    display: none;
  }
  @media (min-width: 700px) {
    .menuMobile {
      display: none;
    }
    .menuDesktop {
      display: flex;
    }
  }
`;
