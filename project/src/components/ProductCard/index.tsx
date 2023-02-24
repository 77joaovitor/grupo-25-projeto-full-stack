import { Container } from "./style";
import car from "../../assets/car.png";
import { PropsAnnouncementCard } from "../../interfaces/component.interface";

const ProductCard = ({announcement}: PropsAnnouncementCard) => {
  return (
    <Container>
      <div className="imageProduct">
        <img src={car} alt="" />
      </div>
      <section className="descriptionProduct">
        <h3>{announcement.title}</h3>
        <p>
          {announcement.description}
        </p>
        <div className="userConteiner">
          <span className="logoName">SL</span> <span>{announcement.advertiser.name}</span>
        </div>
        <div className="infoContainer">
          <div className="kmAndAge">
            <span className="km">{announcement.vehicle.mileage}</span> <span className="age">{announcement.vehicle.year.toString()}</span>
          </div>
          <span className="price">R$ {announcement.vehicle.price}</span>
        </div>
      </section>
    </Container>
  );
};

export default ProductCard;
