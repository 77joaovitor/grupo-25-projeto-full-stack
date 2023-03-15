import styled from "styled-components";

export const ContainerProfileModal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
      
    z-index: 99999;
    inset: 0;
    width: 100%;
    height: 100vh;
    color: #000000;
    background: rgba(18, 18, 20, 0.3);
    ::-webkit-scrollbar {
        width: 0px;   
        border: 1px solid ;
    }   
`

export const BoxContentForm = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;

    padding-top: 250px;
    
    background: #ffff;
    border-radius: 4px;
    ::-webkit-scrollbar {
        width: 0px;   
        border: 1px solid ;
    }   

    ::-webkit-scrollbar-track{
        background: #F4F4F4; 
    } 
    scroll-behavior: smooth;
    @media (min-height: 585px) {
        padding-top: 200px;
    }
    @media (min-width: 580px) {
        width: 520px;
        /* padding-top: 200px; */

    }
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    inset: 9999;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    background-color: #ffff;
    width: 90%;
    padding: 20px;
    left: 0;
    margin: 0 auto;
    right: 0;
    top: 30px;

    .btn_close{
        width: max-content;
        padding: 0;
    }

    @media (min-width: 580px) {
        width: 520px;
    }
`

export const FormUpdate = styled.form`
    background: #ffff;
    width: 90%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 10px;
    height: max-content;

    width: 90%;
    .btn_close{
        padding: 0;
    }

    .button_del_input{
       display: flex;
       flex-direction: row-reverse;
       button{
           position: relative;
           right: 20px;
           width: max-content;
           height: max-content;
           padding: 0;
        }
    }  
    .eye{
        height: 0px;
        position: relative;
        top: -50px;
        left: 40%;
    }
   
    .info{
        width: 100%;
        display: flex;
        align-items: flex-start;
        margin: 10px;
    }

    label{
        font-size: 12px;
    }

    @media (min-width: 580px) {
        width: 520px;
    }
`

export const BoxButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: flex-start;
    gap: 10px;
    width: 100%;
    font-size: 13.5px;
    padding: 10px 10px;
    button{
        width: 50%;
    }

    .btn_cancel{
        /* width: 146px; */
        width: 126px;
/* height: 48px; */
    background: #DEE2E6;
    font-size: 13.5px;
    padding: 10px 10px;
    }
    .btn_save{
        background: #4529E6;
                color: #ffff;
        font-size: 13.5px;
    padding: 10px 10px;
    width: 193px;

    height: 45px;
    }

`

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