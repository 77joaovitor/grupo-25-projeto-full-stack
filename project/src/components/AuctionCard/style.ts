import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  .img-mobile {
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
  .img-desktop {
    display: none;
  }
  @media (min-width: 700px) {
    .img-desktop {
      display: block;
      border-radius: 4px;

      width: 95%;
    }
    .img-mobile {
      display: none;
    }
  }
`;
