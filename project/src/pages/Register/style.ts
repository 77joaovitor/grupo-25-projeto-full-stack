import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerMain = styled.main`
    /* height: 100px; */
    height: 1900px;
    width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
    background: #f1f3f5;
    padding: 20px 0;

    input, textarea{
        background-color: transparent;
    }
`

export const ContainerRegister = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`