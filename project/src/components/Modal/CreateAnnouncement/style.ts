import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)<{ active?: boolean }>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    inset: 0;

    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.3);
`

export const BoxContent = styled(motion.div)<{ active?: boolean }>`
    background: #ffff;
`
export const FormCreate = styled(motion.form)<{ active?: boolean }>`

`

export const BoxTitle = styled.div`

`