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
    > a {
      background-color: rgba(255, 255, 255, 1);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #495057;
      border-radius: 0px;
      border: none;
    }
  }
  
  .loginOptions {
    display: flex;
    padding: 0.8rem 28px;
    gap: 10px;
    .btn-link{
      color: #FFFF;
      background-color:  #5126ea;

    }
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

  .box-user{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      width: 100%;
      padding: 20px 0;
      padding-right: 0;
      .btn-user{
        display: flex;
        /* gap: 50px; */
        /* width: fit-content; */
        padding: 0;
        border: none;
        color: #495057; 
        background: transparent;
        :active, :focus, :hover{
          background-color: transparent;
          color: #495057; 
        }
      }
    }

  filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.09));
`;

export const Dropdown = styled.div`
  position: fixed;
  top: 90%;
  /* right: 20px; */
  display: flex;
  height:  16px;
  margin-left: 10px;
  width: 43%;
/* height: 202px; */
  .svg{
    color:red;

    width: 10px;
  }

`

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
    position: absolute;
    justify-content: flex-start;
    min-width: 160px;
    background-color: white;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 4px;

    color:red;
    margin: 0;
    width: 200px;
    height: max-content;  
    padding: 20px;
    gap: 20px;
    button{
      border: none;
      padding: 0;
      justify-content: flex-start;
      color: #495057;
      background: transparent;
      :active, :focus, :hover{
        background: transparent;
        color: #495057;
      }
    }

    p {
        font-size: 60%;
        width: fit-content;
        margin: 0;
        line-height: 20px;
    }
`