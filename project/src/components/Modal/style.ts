import styled from "styled-components";

export const Container = styled.div`
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
    /* overflow-y: auto; */
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
    top: 20px;

    .btn_close{
        width: max-content;
        padding: 0;
    }

    @media (min-width: 580px) {
        width: 520px;
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

    padding-top: 300px;
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
    
    @media (min-width: 580px) {
        width: 520px;
    }
`