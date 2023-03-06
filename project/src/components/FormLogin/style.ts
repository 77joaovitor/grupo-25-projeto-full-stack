import styled from "styled-components";



export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;

    padding: 6% 10%;

    h2{
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
    }

    background: #FDFDFD;
    border-radius: 4px;

    input{
        background-color: transparent;
        button{
            color: #495057;

        }
        background: transparent;
    }
    .eye{
        height: 0;
        position: relative;
        top: -50px;
        left: 40%;
    }
    button{
        width: 100%;
        background: #4529E6;
        color: #FFFFFF;
        
    }

    .link-recovery{
        display: flex;
        justify-content: flex-end;
        color: #495057;
    }

    .link-register{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;
        border: 1px solid #ADB5BD;
        border-radius: 4px;
        color: #0B0D0D;
    }

    span{
        margin: 0 auto;
    }

    @media (min-width: 375px) {
        .eye{
            left: 120px;
        }

    }
    
    @media (min-width: 440px) {
        width: 412px;
        padding: 44px 48px;
    }

`;

export const BoxInput = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 5px;
    .eye{
        position: relative;
        top: 20px;
    }
`