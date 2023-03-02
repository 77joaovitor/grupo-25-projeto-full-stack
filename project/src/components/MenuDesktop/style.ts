import styled from "styled-components";

export const Container = styled.div`
  top: 14px;
  display: flex;
  

  background-color: transparent;
  height: 4rem;
  .options {
    /* top: 15px; */
    display: flex;
    background-color: transparent;
    border-right: 2px solid #dee2e6;
    height: 4rem;
    >.btn-link {
      color: #495057; 
      padding: 0;
      display: flex;
      width: 90px;
      font-size: 16px;
      border: none;
      :hover{
        color:  #5126ea;
      }
    }
    
  }
  .loginOptions {
    display: flex;
    width: 60%;

    
    align-items: center;
    justify-content: center;

    .box-user{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 20px;
      padding-right: 0;
      .btn-user{
        width: fit-content;
        padding: 0;
        border: none;
        color: #495057; 
        :active, :focus, :hover{
          background-color: transparent;
          color: #495057; 
        }
      }
    }
    
    .btn-link {
      color: #495057; 
      padding: 0;
      display: flex;
      width: 133px;
      font-size: 16px;
      border: none;
      :focus, :active,:checked,:hover{
        color:  #5126ea;
        background: transparent;
      }
    }
      
    .btn-register {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: black;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid #dee2e6;
      width: 133px;
      height: 40px;
    }
  }

  filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.09));
`;

export const Dropdown = styled.div`
  position: relative;
  top: 5px;
  display: inline-block;
  height:  16px;
  margin-left: 10px;
  
  .svg{
    color:red;

    width: 10px;
  }

`

export const DropdownContent = styled.div`

`