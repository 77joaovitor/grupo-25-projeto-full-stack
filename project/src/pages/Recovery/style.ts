import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 40rem;
  background-color: #f1f3f5;

  @media (min-width: 650px) {
   height: 43rem;
  }
`;
