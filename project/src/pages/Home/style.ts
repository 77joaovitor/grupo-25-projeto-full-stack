import styled from "styled-components";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

export const PresentationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  gap: 80px;
  height: 700px;

  p {
    font-weight: 600;
    font-size: 35px;
    line-height: 40px;
    text-align: center;
  }
  span {
    line-height: 20px;
    text-align: center;
  }
  p,
  span,
  a,
  button {
    color: #fdfdfd;
    
  }

  a{
    :hover{
      color: #5126ea;
      border: 1px solid #5126ea;
      background: #fdfdfd;
      transition: 400ms;
    }
  }

  background: #5126ea;

  @media (min-width: 590px) {
    p {
      width: 548px;
    }
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;

  margin: 0 auto;
  gap: 10px;
  width: 100%;

  button,
  a {
    width: 100%;
  }

  @media (min-width: 350px) {
    flex-direction: row;
    button,
    a {
      width: 50%;
    }
  }

  @media (min-width: 434px) {
    width: 400px;
  }
`;


export const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 4%;
  width: 100%;

  .box-1{
    height: 600px;

  }
  @media (min-width: 1030px) {
    .box-1{
      height: 390px;
    }
  }
`;
export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 422px;
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding-bottom: 20px;
  height: 522px;
  .react-multi-carousel-item {
    padding: 10px;
    
  }
`;

export const ContainerList = styled(Carousel)`
    display: flex;
    .react-multiple-carousel__arrow--left {
    left: calc(1% + 1px);
  }
  li {
    width: 300px;
  }
  > button {
    z-index: 0;
    scale: 0;
  }
  :hover{
    button{
        display: flex;
        scale: 1;
        transition: 500ms;
    }
}
    padding: 0;

    list-style-type: none;
`

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 92vw;
`