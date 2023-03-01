import styled from "styled-components";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
`

export const PresentationSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3%;
    gap: 52px;
    height: 250px;
    

    p{
        font-weight: 600;
        font-size: 35px;
        line-height: 40px;
        text-align: center;
    }
    span{
        line-height: 20px;
        text-align: center;

    }
    p, span, a, button{
        color: #FDFDFD;
    }


        background: #5126EA;

    @media (min-width: 590px) {
        p{
            width: 548px;
        }   
    }
`;

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 70%;
    width: 91%;
    gap: 15px;
   
    background: #FDFDFD;
    border-radius: 4px;

    padding: 40px 29px;
    padding-bottom: 20px;

    span{
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;


        color: #212529;
    }
    p{
        text-align: justify;
        font-weight: 400;
        font-size: 12px;
        line-height: 28px;
        width: 100%;
        margin: 0;
        color: #495057;
    }

    button{
        width: 107px;
        padding: 12px 10px;
        font-size: 12px;

        color: #4529E6;
        border: 1px solid #4529E6;
        
        :focus,
        :visited {
            background-color: #4529E6;
            color: #fff;
            outline: none;
        }
    }
`


export const UserInformation = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 15px;


  .logoName {
    display: flex;
    border-radius: 50%;
    background-color: rgba(69, 41, 230, 1);
    justify-content: center;
    align-items: center;
    color: rgba(233, 236, 239, 1);
    width: 80px;
    height: 80px;
    font-size: 14px;
    font-weight: 500;
  }
  
`

export const ContainerMain = styled.main`
    background-color: #F1F3F5;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 5%;
    width: 100%;

    padding-top: 240px;
    @media (min-width: 420px) {
        padding-top: 220px;
        
    }
    @media (min-width: 700px) {
        padding-top: 180px;
        
    }
`

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
`

export const ContainerList = styled(Carousel)`
    display: flex;
    overflow-x: auto;
    justify-content: center;
    gap: 5px;
    padding: 0;

    list-style-type: none;
`