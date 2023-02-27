import styled from "styled-components";

export const Container = styled.div`
  top: 14px;
  display: flex;
  /* width: 100vw; */
  /* flex-direction: column; */

  background-color: transparent;
  height: 4rem;
  .options {
    /* top: 15px; */
    display: flex;
    background-color: transparent;
    border-right: 2px solid #dee2e6;
    height: 4rem;
    > button {
      background-color: transparent;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #495057;
      padding: 0.8rem 1rem;
      border-radius: 0px;
    }
  }
  .loginOptions {
    padding: 0.8rem 1rem;
    .loginOpitonsAuth {
      display: flex;
      gap: 20px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #495057;
      > span {
        width: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > button {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: black;
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid #dee2e6;
        width: 80%;
        margin: auto;
      }
    }
  }

  filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.09));
`;
