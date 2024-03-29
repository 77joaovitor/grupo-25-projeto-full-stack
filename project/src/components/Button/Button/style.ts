import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    cursor: pointer;

    border: 1px solid #ADB5BD;
    border-radius: 4px;
    /* background: transparent; */
    /* color: #0B0D0D; */
    margin: 0;

    :focus,
    :visited {
        /* background: #4529E6; */
        /* color: #fff; */
        outline: none;
    }

`

export const ButtonType = styled(motion.button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;


    border: 1px solid #ADB5BD;
    border-radius: 4px;
    background: transparent;
    color: #0B0D0D;
    margin: 0;

    :focus,
    :visited {
        background-color: #4529E6;
        color: #fff;
        outline: none;
    }
    
`