import { Container } from "./style";
import car from "../../assets/car.png";

const ProductCard = () => {
  return (
    <Container>
      <div className="imageProduct">
        <img src={car} alt="" />
      </div>
      <section className="descriptionProduct">
        <h3>Product title stays here - max 1 line</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
        <div className="userConteiner">
          <span className="logoName">SL</span> <span>Samuel Leão</span>
        </div>
        <div className="infoContainer">
          <div className="kmAndAge">
            <span className="km">km</span> <span className="age">ano</span>
          </div>
          <span className="price">R$ 00.000,00</span>
        </div>
      </section>
    </Container>
  );
};

export default ProductCard;
