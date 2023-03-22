import styled from "styled-components";

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    margin:auto 0;
    gap: 30px;


    width: 90%;
    height: max-content;
    padding: 7% 5%;
    background-color: #ffff;
    border-radius: 8px;

    .btn{
        /* width:max-content; */
        padding: 0;
    }

    h2{
        font-size: 15px;
    }
    h3{
        font-size: 12px;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        /* or 175% */
        color: #000000;
    }
    p{
        font-weight: 400;
        text-align: justify;
        font-size: 16px;
        line-height: 28px;

        color: #495057;
    }
    
    @media (min-width: 540px) {
        width : 520px;
        padding: 37px 27px;
    }
    
`

export const BoxButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: flex-start;
    gap: 10px;
    width: 100%;
    font-size: 13.5px;
    width: 100%;

    .cancel_btn{
        height: 45px;
        background: #DEE2E6;
        color: #495057;
        font-size: 13.5px;
        padding: 10px 10px;
        width: 95px;
    }
    .delete_btn{
        background: #FDD8D8;
        color: #CD2B31;
        font-size: 13.5px;
        padding: 10px 4px;
        width: 151px;
        height: 45px;
    }



`