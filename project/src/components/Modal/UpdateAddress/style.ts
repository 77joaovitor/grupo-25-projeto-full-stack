import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerProfileModal = styled(motion.div)`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
      
    z-index: 9999;
    inset: 0;
    width: 100%;
    height: 100%;
    color: #000000;
    background: rgba(18, 18, 20, 0.3);
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0px;   
        border: 1px solid ;
    }   
`
export const BoxInput = styled.div`
    display: flex;
    gap: 10px;
`

export const FormUpdate = styled(motion.form)`
    background: #ffff;
    width: 90%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 7px;
    padding-top: 20px;
    height: fit-content;
    /* position: absolute; */
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
        height: fit-content;
        padding: 10px 0;
    }

    input{
        :focus{
            border: 1px solid #212529;
        }
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
        width: 126px;
        background: #DEE2E6;
        font-size: 13.5px;
        padding: 10px 10px;
    }
    .btn_save{
        background: #B0A6F0;
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

export const BoxTitle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    h3{
        width: fit-content;
        background-color: transparent;
    }

`