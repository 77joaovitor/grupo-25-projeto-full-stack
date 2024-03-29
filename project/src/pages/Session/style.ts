import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerSession = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContainerMain = styled.main`
    /* height: 100px; */
    height: 800px;
    width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
    background: #f1f3f5;
    padding: 20px 0;
`