import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 99999;
  inset: -1;
  top: 14px;
  display: flex;
  width: 100vw;
  flex-direction: column;
  right: 0;
  background-color: rgba(255, 255, 255, 1);
  .options {
    top: 15px;
    display: flex;
    width: 100vw;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid #dee2e6;
    > button {
      background-color: rgba(255, 255, 255, 1);
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
      flex-direction: column;
      gap: 20px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #495057;
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
