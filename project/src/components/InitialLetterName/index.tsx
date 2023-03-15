import { Container } from "./style";
export interface ILatterName {
  name: string;
  width?: number;
  heigth?: number;
  fontSize?: number;
  className?: string;
}
const InitialLetterName = ({ name, width, heigth, fontSize, className }: ILatterName) => {
  return (
    <Container name={name} width={width} heigth={heigth} fontSize={fontSize}>
      <span className={className}>{name}</span>
    </Container>
  );
};

export default InitialLetterName;
