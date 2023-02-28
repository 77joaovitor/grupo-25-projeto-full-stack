import { Container, BoxButton } from "./style";
import car from "../../assets/car.png";
import moto from "../../assets/moto.png";
import { PropsAnnouncementCard } from "../../interfaces/component.interface";
import { AnnouncementContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Button } from "../Button";
import { UserContext } from "../../context/user/userContext";

const ProductCard = ({ announcement }: PropsAnnouncementCard) => {
 
  const { 
    setDetailAnoucements, 
    setIsOpenModalUpdateAnnouncement, 
    isOpenModalUpdateAnnouncement,
  } = AnnouncementContext();

  const { user, setUser, getUser } = UserContext();


  const navigate = useNavigate();

  return (
    <>
      {
        user.isAdvertiser ?
          <Container>
            <div className="imageProduct">
              <img
                src={announcement.vehicle.type === "car" ? car : moto}
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
                <span className="logoName">{announcement.advertiser.name[0]}</span>{" "}
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
            <BoxButton>
              <Button
                className="btn_edit"
                onClick={() =>{
                  setDetailAnoucements(announcement)
                  setIsOpenModalUpdateAnnouncement(!isOpenModalUpdateAnnouncement)
                }}
              >
                Editar
              </Button>

              <Button
                className="btn_see"
              >
                Ver como
              </Button>
            </BoxButton>
        </Container>

        : 

        <Container>
        <div className="imageProduct">
          <img
            src={announcement.vehicle.type === "car" ? car : moto}
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
            <span className="logoName">{announcement.advertiser.name[0]}</span>{" "}
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
      }
    </>
  );
};

export default ProductCard;

// {

//   "type": "motorcycle",

//   "title": "honda bis",

//   "description": " a;lskjfs asjksakdjh hiiuuuu lkjdpkjhs lkjhsai kjnashdf lkjasdhj lkjsas ",

//   "advertiser": "User",

// }
