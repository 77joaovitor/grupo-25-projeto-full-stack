import { Container } from "./style";
import car from "../../assets/car.png";
import { useContext } from "react";
import { AnnouncementContext } from "../../context";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import InitialLetterName from "../../components/InitialLetterName";
import { Footer } from "../../components/Footer";
import { AnnouncementResponse } from "../../interfaces/announcement.interface";

export const DetailAnnouncement = () => {
  const navigate = useNavigate();
  const { detailAnoucements, getAllAnnouncementByAdvertiser } =
    AnnouncementContext();
  return (
    <Container>
      <Header />
      <div className="container-main-detailAnnou">
        <div className="container1">
          <div className="container-main-desktop">
            <div className="conteiner-first-desktop">
              <div className="fotoPrincipal">
                <img
                  className="logoPrincipal"
                  src={detailAnoucements?.vehicle?.coverImage!}
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
                  <h4>R$ {detailAnoucements?.vehicle?.price}</h4>
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
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                  </div>
                </div>

                <div className="peapleAnnouncement">
                  <InitialLetterName
                    name={detailAnoucements?.advertiser?.name[0]}
                  />
                  <h2>{detailAnoucements?.advertiser?.name}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur magni, officia voluptates accusantium cumque
                    laudantium atque facilis mollitia tempora recusandae
                    praesentium hic, veritatis nisi dolor vitae repellat magnam
                    cum quidem?
                  </p>
                  <button
                    className="peapleAnnouncement-button"
                    onClick={() => {
                      localStorage.setItem(
                        "advertiserID",
                        detailAnoucements?.advertiser.id
                      );

                      navigate("/profile");
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
              <div className="coments">
                <h1>Comentários</h1>
                <div className="coments-name">
                  <InitialLetterName name="JL" />
                  <h4>Júlia Lima</h4>
                  <h5>há 3 dias</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ut nesciunt totam eligendi obcaecati culpa aliquam accusamus
                  sapiente facere eius iusto et ipsam eum dolorum, enim
                  quibusdam sequi magnam beatae.
                </p>
              </div>

              <div className="peapleComents">
                <div className="peapleComents-peap">
                  <InitialLetterName
                    name={detailAnoucements?.advertiser?.name[0]}
                  />
                  <h4>{detailAnoucements?.advertiser?.name}</h4>
                </div>
                <div className="input">
                  <textarea placeholder="Digite algo" />
                  <button className="comentButton">Comentar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      <Footer />
    </Container>
  );
};
