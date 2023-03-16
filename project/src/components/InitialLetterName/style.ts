import styled from "styled-components";
import { ILatterName } from ".";

export const Container = styled.div<ILatterName>`
  width: ${({ width }) => (width ? `${width}rem` : "2rem")};
  height: ${({ heigth }) => (heigth ? `${heigth}rem` : "2rem")};
  background-color: #5126ea;
  background-color:${({ name }) => (
    name === 'A' ? `red` 
      :  name === 'B' ?"green" 
      :  name === 'C' ? "gray"
      :  name === 'D' ? "yellow"
      :  name === 'E' ? "brown"
      :  name === 'F' ? "black"
      :  name === 'G' ? "#F66813"
      :  name === 'H' ? "#DF3B19"
      :  name === 'I'  ?"#3FE864"
      : name === 'J' ? "#acc9ff"
      : name === 'K' ? "#000080"
      : name === 'L' ? "#E60000"
      : " #FFCD07"
  )};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  span{
    color: #FFF;
  }
  > h1 {
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1rem")};
    font-weight: 600;
    font-family: "Inter";
  }
`;
