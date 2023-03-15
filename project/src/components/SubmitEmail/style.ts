import styled from "styled-components";


export const FormSubmitEmail = styled.form`

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;

    width: 90%;
    max-width: 500px;
    min-height: 18rem;
    padding: 1.5rem;

    background-color: white;
    border-radius: 4px;

    h2{
        color: #495057;
    }
    .eye {
        height: 0px;
        position: relative;
        top: -50px;
        left: 90%;
        cursor: pointer;
    }
    .eye-2 {
    height: 0px;
    position: relative;
    top: -50px;
    left: 90%;
    cursor: pointer;
  }

    
    input {
    background-color: transparent;

        :focus{
            border: 1px solid blue;
            transition: 400ms;
        }
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
}

input[type="password"]::-webki{
    -webkit-appearance: none;
    margin: 0;
    display: none;
}
      button {
        width: 50%;
        background-color: blue;
        font-size: 1rem;
        color: white;
        :hover {
            background-color: #FFFF;
            color: blue;
            border: 1px solid blue;
            transition: 400ms;
        }
      }

    
`