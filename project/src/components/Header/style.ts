import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  width: 100vw;
  height: 4rem;
  border-bottom: 2px solid #dee2e6;
  .menuMobileHeader {
    position: absolute;
    top: 50px;
    right: 0px;
  }
  @media (min-width: 700px) {
    .menuMobile {
      display: none;
    }
  }
`;
