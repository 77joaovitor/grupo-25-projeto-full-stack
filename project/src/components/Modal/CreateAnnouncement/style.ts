import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    padding: 20px 0;
      
    z-index: 9999;
    inset: 0;
    width: 100%;
    min-height: 100%;
        color: #000000;
    background: rgba(18, 18, 20, 0.3);
    overflow-y: auto;
`

export const BoxContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;

    input{
        /* height: ; */
    }
    label{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }

    .add_image{
        background: #EDEAFD;
        justify-content: flex-start;
        padding: 5px 21px;
        width: fit-content;
        border: 1px solid #EDEAFD;
        border-radius: 4px;
        height: 38px;
        font-weight: 600;
        font-size: 12px;
        line-height: 0px;
        color: #4529E6;

    }
    
`
export const FormCreate = styled.form`
    position: absolute;
    z-index: 0;
    
    background: #ffff;
    width: 90%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 0px 16px 32px;
    gap: 37px;
    
    position: absolute;
    width: 90%;

    .button_del_input{
       display: flex;
       flex-direction: row-reverse;
       button{
           position: relative;
           right: 33px;
           width: max-content;
           height: max-content;
           padding: 0;
        }
    }  

    @media (min-width: 580px) {
        width: 520px;
    }
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const BoxType = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    label{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }

`

export const BoxButton = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    gap: 10px;
    width: 100%;

    button{
        width: 50%;
    }

    .cancel_btn{
        width: 146px;
        background: #F1F3F5;
    }
    .create_btn{
        background: #B0A6F0;
        color: #ffff;
    }

`

export const BoxVehicleInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; 

    .inf{
        display: flex;
        gap: 10px; 
    }


    
    @media (min-width: 438px) {
        .inf{
         display   :contents ;
        }
        flex-direction: row;
        #vehiclePrice{
            .box_input_error{

                width: 113px;
            }
        }
    }

    input{
        width: 100%;
    }
`