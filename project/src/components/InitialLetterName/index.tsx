import { Container } from "./style";
export interface ILatterName {
  name: string;
  width?: number;
  heigth?: number;
  fontSize?: number;
}
const InitialLetterName = ({ name, width, heigth, fontSize }: ILatterName) => {
  return (
    <Container name={name} width={width} heigth={heigth} fontSize={fontSize}>
      <span>{name}</span>
    </Container>
  );
};

export default InitialLetterName;
