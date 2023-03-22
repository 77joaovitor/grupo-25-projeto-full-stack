import styled from "styled-components";

export const Container = styled.form`
  background-color: white;
  width: 90%;
  padding: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border-radius: 4px;
  span {
    /* margin-top: 20px; */
    font-weight: 500;
  }
  .formText {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;

    margin: 0;
  }
  span {
    font-size: 13px;
    width: 100%;
  }

  h2 {
    width: fit-content;
    margin: 0;
  }

  .formButton {
    display: flex;
  }

  /* button {
    color: white;
    border-radius: 5px;
    border-style: none;
    margin: 5px;
    width: 200px;
    height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  .buttonWhite {
    background-color: white;
    color: black;
    border-radius: 5px;
    border: 1px solid #E9ECEF;
    transition: 400ms;
    :hover{
      border: #5126ea solid 1px;

    }
  }
  .buttonBlue {
    background-color: #5126ea;
    color: white;
    border-radius: 5px;
    border: #5126ea solid 1px;
    transition: 500ms;
  }
  .buttonFinaly {
    width: 100%;
    background-color: #5126ea;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
    
        background-color: white;
        color: black;
      transition: 400ms;
    }
  }

  .eye, .eye-2 {
    height: 0px;
    position: relative;
    top: -50px;
    left: 90%;
    cursor: pointer;
  }

  @media (min-width: 470px) {
    width: 410px;
  }
`;

export const BoxType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  gap: 10px;
  width: 100%;

  button {
    width: 50%;
    height: 45px;
  }

  .cancel_btn {
    width: 146px;
    background: #f1f3f5;
  }
  .create_btn {
    background: #b0a6f0;
    color: #ffff;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  gap: 10px;
`;
