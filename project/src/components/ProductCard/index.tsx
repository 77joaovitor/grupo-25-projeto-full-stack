import { Container, BoxButton } from "./style";
import car from "../../assets/car.png";
import moto from "../../assets/moto.png";
import { PropsAnnouncementCard } from "../../interfaces/component.interface";
import { AnnouncementContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Button } from "../Button";
import { UserContext } from "../../context/user/userContext";

const ProductCard = ({
  announcement,
  isAdvertisePage,
  isOwner,
}: PropsAnnouncementCard) => {
  const {
    setDetailAnoucements,
    setIsOpenModalUpdateAnnouncement,
    isOpenModalUpdateAnnouncement,
    // getOneAnnouncement
    setReload,
    reload,
  } = AnnouncementContext();
  function priceFormat(value: number) {
    let price = value.toString().split("").reverse().join("").replace(".", "");
    price = price.replace(/(\d{2})/, "$1,");
    price = price.replace(/(\d{3}(?!$))/g, "$1.");
    return price.split("").reverse().join("");
  }
  const { user, setUser, getUser } = UserContext();
  const isAutorizated = isAdvertisePage && user.isAdvertiser;

  const navigate = useNavigate();

  return (
    <>
      {
        <Container>
          <figure className="imageProduct">
            <img
              src={announcement.vehicle.coverImage}
              alt=""
              onClick={() => {
                setDetailAnoucements(announcement);
                localStorage.setItem("announcementID", announcement?.id);
                navigate("/announcement/");
              }}
            />
          </figure>
          <section className="descriptionProduct">
            <h3>{announcement.title}</h3>
            <p>
              {announcement.description.length > 70
                ? announcement.description.substring(0, 80) + "..."
                : announcement.description}
            </p>
            {isOwner ? null : (
              <div className="userConteiner">
                <span className="logoName">
                  {announcement.advertiser.name[0]}
                </span>
                <span>{announcement.advertiser.name}</span>
              </div>
            )}
            <div className="infoContainer">
              <div className="kmAndAge">
                <span className="km">{announcement.vehicle.mileage}</span>{" "}
                <span className="age">
                  {announcement.vehicle.year.toString()}
                </span>
              </div>
              <span className="price">
                R$ {priceFormat(announcement.vehicle.price)}
              </span>
            </div>
          </section>
          {isAutorizated && (
            <BoxButton>
              <Button
                className="btn_edit"
                onClick={() => {
                  setDetailAnoucements(announcement);
                  setIsOpenModalUpdateAnnouncement(
                    !isOpenModalUpdateAnnouncement
                  );
                }}
              >
                Editar
              </Button>

              <Button className="btn_see">Ver como</Button>
            </BoxButton>
          )}
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
