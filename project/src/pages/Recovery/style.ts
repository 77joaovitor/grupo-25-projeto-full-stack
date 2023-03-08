import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f3f5;
  > div {
    width: 95%;
    max-width: 500px;
    height: 18rem;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem;
    background-color: white;
    border-radius: 4px;
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    form {
      width: 100%;
      height: 10rem;
      display: flex;
      gap: 10px;
      flex-direction: column;
      label {
        margin-bottom: 10px;
      }
      input {
        background-color: white;
        width: 90%;
        height: 3rem;
        border-radius: 4px;
        border: 1px solid rgba(81, 38, 234, 1);
      }
      button {
        width: 50%;
        background-color: blue;
        font-size: 1rem;
        color: white;
      }
    }
  }
`;
