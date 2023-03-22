import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 1;
  inset: 9999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffff;
  padding: 5%;
  width: 100vw;
  height: 4rem;
  border-bottom: 2px solid #dee2e6;
  > figure {
    cursor: pointer;
  }

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
      /* display: none; */
    }
    padding: 35px;
    .menuDesktop {
      /* display: flex; */
      /* justify-content: ; */
    }
  }
`;
