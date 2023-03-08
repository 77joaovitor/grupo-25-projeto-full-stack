import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const PresentationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  gap: 52px;
  height: 584px;

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
`;
export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 422px;
`;

export const BoxContent = styled.div`
  width: 100%;
  position: relative;
  .divCarouselCar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 92vw;
    top: 138px;
  }
  .divCarouselMoto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 92vw;
    top: 138px;
  }
`;
export const ContainerList = styled(Carousel)`
  display: flex;
  box-sizing: border-box;
  .react-multiple-carousel__arrow--left {
    left: calc(1% + 1px);
  }
  li {
    width: 300px;
  }
  > button {
    z-index: 0;
  }
`;
