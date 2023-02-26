import { Container } from "./style";
import car from "../../assets/car.png";
import { PropsAnnouncementCard } from "../../interfaces/component.interface";
import { AnnouncementContext } from "../../context";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ announcement }: PropsAnnouncementCard) => {
  const { setDetailAnoucements } = AnnouncementContext();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="imageProduct">
        <img
          src={car}
          alt=""
          onClick={() => {
            setDetailAnoucements(announcement);
            navigate("/announcement/");
          }}
        />
      </div>
      <section className="descriptionProduct">
        <h3>{announcement.title}</h3>
        <p>{announcement.description}</p>
        <div className="userConteiner">
          <span className="logoName">SL</span>{" "}
          <span>{announcement.advertiser.name}</span>
        </div>
        <div className="infoContainer">
          <div className="kmAndAge">
            <span className="km">{announcement.vehicle.mileage}</span>{" "}
            <span className="age">{announcement.vehicle.year.toString()}</span>
          </div>
          <span className="price">R$ {announcement.vehicle.price}</span>
        </div>
      </section>
    </Container>
  );
};

export default ProductCard;
