import { Container, BoxButton } from "./style";
import { PropsAnnouncementCard } from "../../interfaces/component.interface";
import { AnnouncementContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { UserContext } from "../../context/user/userContext";
import InitialLetterName from "../InitialLetterName";

const ProductCard = ({ announcement, isAdmPage }: PropsAnnouncementCard) => {
  const {
    setDetailAnoucements,
    setIsOpenModalUpdateAnnouncement,
    isOpenModalUpdateAnnouncement,
    setReload,
    reload,
  } = AnnouncementContext();

  const { user } = UserContext();

  const editAdm = user.isAdvertiser && isAdmPage;

  const navigate = useNavigate();

  return (
    
      
        <Container isActive={announcement.isActive}>
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
            <span className="active">{announcement.isActive ? "Ativo" : "Inativo"}</span>
          </figure>
          <div className="descriptionProduct">
            <h3>{announcement.title}</h3>
            <p>
              {announcement.description.length > 70
                ? announcement.description.substring(0, 60) + "..."
                : announcement.description}
            </p>
            {!isAdmPage && (
              <div className="userConteiner">
                <InitialLetterName 
                  name={announcement.advertiser.name[0]}  

                />
                {/* <span className="logoName">
                  {announcement.advertiser.name[0]}
                </span>{" "}
                <span>{announcement.advertiser.name}</span> */}
              </div>
            )}
            <div className="infoContainer">
              <div className="kmAndAge">
                <span className="km">{announcement.vehicle.mileage + " km"}</span>{" "}
                <span className="age">
                  {announcement.vehicle.year.toString()}
                </span>
              </div>
              <span className="price">
                {announcement.vehicle.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
          {editAdm && (
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

              <Button 
              className="btn_see"
              onClick={() => {
                setDetailAnoucements(announcement);
                localStorage.setItem("announcementID", announcement?.id);
                navigate("/announcement/");
              }}
              >Ver como</Button>
            </BoxButton>
          )}
        </Container>
      
    
  );
};

export default ProductCard;
