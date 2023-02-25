import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 10px;
    gap: 60px;


    *{
        
        color: #FFFFFF;

    }
    background: #0B0D0D;
    span{
    }

   
    a{
        background: #212529;
        border-radius: 4px;
        width: 53px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        .icon{
            position: relative;
            top: 4px;

        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 45px 60px;
    }
`
export const ContainerButton = styled.div`
        display: flex;

        width: fit-content;
       

`