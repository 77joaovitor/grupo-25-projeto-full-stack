import styled from 'styled-components';

export const ContainerButton = styled.button`

  width: fit-content;

    display: flex;
    align-items: center;
    
    gap: 10px;
    
    border: none;
    border-radius: 5px;
    
    
    width:fit-content;
    height: 100%; 
    
    background-color: transparent;
    
    font-size: 85%;
    
    :active, :focus, :hover{
        border: none !important;
        outline: none;

    }
    .svg{
      background-color: transparent;

      /* width: 15px; */
      font-size: 20px;

      /* color: gray; */
      width: 20px;
    
  }
`;
