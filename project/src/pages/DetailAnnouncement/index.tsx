import { useNavigate } from "react-router-dom";
import car from "../../assets/car.png";
import { AnnouncementContext } from "../../context";
import { getToken } from "../../context/session/auth";
import { UserContext } from "../../context/user/userContext";
import { Container } from "./style";
import Header from "../../components/Header";
import InitialLetterName from "../../components/InitialLetterName";
import { Footer } from "../../components/Footer";
import { FormComment } from "../../components/FormComment";
import { CommentCard } from "../../components/CommentCard";

export const DetailAnnouncement = () => {
  const navigate = useNavigate();
  const { detailAnoucements, getAllAnnouncementByAdvertiser } =
    AnnouncementContext();

  const { user, isDropdown, setIsDropDown } = UserContext();
  const token = getToken();
  return (
    <Container>
      <Header />
      <div className="container-main-detailAnnou"
        id="home"
      >
        <div className="container1"
           onClick={
            () => isDropdown && setIsDropDown(false)
          }
        >
          <div className="container-main-desktop">
            <div className="conteiner-first-desktop">
              <div className="fotoPrincipal">
                <img
                  className="logoPrincipal"
                  src={detailAnoucements?.vehicle?.coverImage}
                  alt=""
                />
              </div>

              <div className="info">
                <h1>{detailAnoucements?.title}</h1>
                <div className="info-text">
                  <div className="info-text-span">
                    <span className="age">
                      {detailAnoucements?.vehicle?.year
                        .toString()
                        .substring(0, 4)}
                    </span>
                    <span>{detailAnoucements?.vehicle?.mileage} KM</span>
                  </div>
                  <p>R$ {detailAnoucements?.vehicle?.price}</p>
                </div>
                <button>Comprar</button>
              </div>

              <div className="descricao">
                <h1>Descrição</h1>
                <p>{detailAnoucements?.description}</p>
              </div>
            </div>
            <div className="container-second-desktop">
              <aside>
                <div className="container2">
                  <h1>Fotos</h1>
                  <div className="fotos">
                    <img className="details" src={detailAnoucements?.vehicle?.galleryImages[0].imageUrl} alt="" />
                    <img className="details" src={detailAnoucements?.vehicle?.galleryImages[0].imageUrl} alt="" />
                    <img className="details" src={detailAnoucements?.vehicle?.galleryImages[0].imageUrl} alt="" />
                    <img className="details" src={detailAnoucements?.vehicle?.galleryImages[0].imageUrl} alt="" />
                    <img className="details" src={detailAnoucements?.vehicle?.galleryImages[0].imageUrl} alt="" />
                    <img className="details" src={detailAnoucements?.vehicle?.galleryImages[0].imageUrl} alt="" />
                  </div>
                </div>

                <div className="peapleAnnouncement">
                  <InitialLetterName
                    name={detailAnoucements?.advertiser?.name[0]}
                  />
                  <h2>{detailAnoucements?.advertiser?.name}</h2>
                  <p>
                   {detailAnoucements?.advertiser?.description}
                  </p>
                  <button
                    className="peapleAnnouncement-button"
                    onClick={() => {
                      localStorage.setItem(
                        "advertiserID",
                        detailAnoucements?.advertiser.id
                      );
                {
                  token ? user.isAdvertiser ? user.id === detailAnoucements.advertiser.id &&
                    (getAllAnnouncementByAdvertiser(detailAnoucements?.advertiser.id))
                    (navigate("/profile/") )
                  :
                  navigate("/profile")
                  :
                  navigate("/profile") 
                      }

                  {
                          // token ? user.isAdvertiser ?
                    // getAllAnnouncementByAdvertiser(detailAnoucements?.advertiser.id)
                    // :
                  }
                        getAllAnnouncementByAdvertiser(
                        detailAnoucements?.advertiser.id
                      );
                    }}
                  >
                  Ver todos anuncios
                </button>
              </div>
            </aside>
          </div>
            <div className="container-third-desktop">
              <div className="box">
                <h2>Comentários</h2>
              <ul className="coments">
                {
                  detailAnoucements?.comments && 
                  detailAnoucements?.comments?.map((comment, index) => (
                    <CommentCard 
                      key={index}
                      comment={comment}
                    />
                  ))
                }
              </ul>
              </div>

              <div className="peapleComents">
               <FormComment />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container >
  );
};
