import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .img-mobile {
    width: 294px;
  }
  .img-desktop {
    display: none;
  }
  @media (min-width: 700px) {
    .img-desktop {
      display: block;
      width: 95%;
    }
    .img-mobile {
      display: none;
    }
  }
`;
