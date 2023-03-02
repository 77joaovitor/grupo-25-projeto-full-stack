import styled from "styled-components";
import { ILatterName } from ".";

export const Container = styled.div<ILatterName>`
  width: ${({ width }) => (width ? `${width}rem` : "2rem")};
  height: ${({ heigth }) => (heigth ? `${heigth}rem` : "2rem")};
  background-color: #5126ea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1rem")};
    font-weight: 600;
    font-family: "Inter";
    color: white;
  }
`;
