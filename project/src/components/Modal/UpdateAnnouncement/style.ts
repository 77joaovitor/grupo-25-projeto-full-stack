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
    height: 100%;
    color: #000000;
    background: rgba(18, 18, 20, 0.3);
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0px;   
        border: 1px solid ;
    }   
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
/* Brand/brand4 */
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
    background: #ffff;
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 23px;
    margin-top: 300px;
    gap: 10px;

    width: 100%;
    height: fit-content;

    label{
        font-size: 12px;
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
    
    
    @media (min-width: 580px) {
        width: 520px;
    }
    
        @media (min-height: 585px) {
            margin-top: 230px;
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
    font-size: 13.5px;

    button{
        width: 50%;
    }

    .buttonWhite {
        background-color: white;
        color: black;
        border-radius: 5px;
        border: 1px solid #E9ECEF;
        transition: 400ms;
        :hover{
        border: #5126ea solid 1px;

        }
    }
  .buttonBlue {
    background-color: #5126ea;
    color: white;
    border-radius: 5px;
    border: #5126ea solid 1px;
    transition: 500ms;
  }

    .cancel_btn{
        height: 45px;
        background: #F1F3F5;
        font-size: 13.5px;
        padding: 10px 10px;
    }

    .create_btn{
        background: #B0A6F0;
        color: #ffff;
        font-size: 13.5px;
        padding: 10px 10px;
        width: 40%;
        height: 45px;
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
/* 
    /* flex-wrap: ; */
    input{
        width: 100%;
    }
`