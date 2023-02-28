import { Container } from "./style";
import car from "../../assets/car.png";
import { useContext, useEffect } from "react";
import { AnnouncementContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const DetailAnnouncement = () => {
  const navigate = useNavigate();
  const { detailAnoucements, getAllAnnouncementByAdvertiser } =
    AnnouncementContext();

  return (
    <Container>
      {detailAnoucements && (
        <main>
          <div className="container1">
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
                  <span>{detailAnoucements?.description}</span>
                  <span className="age">
                    {detailAnoucements?.vehicle?.year.toString()}
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

            <div className="coments">
              <h1>Comentários</h1>
              <div className="coments-name">
                <h3>JL</h3>
                <h4>Júlia Lima</h4>
                <h5>há 3 dias</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ut nesciunt totam eligendi obcaecati culpa aliquam accusamus
                sapiente facere eius iusto et ipsam eum dolorum, enim quibusdam
                sequi magnam beatae.
              </p>
            </div>

            <div className="peapleComents">
              <div className="peapleComents-peap">
                <h3>SL</h3>
                <h4>Samuel Leão</h4>
              </div>
              <div className="input">
                <input type="text" placeholder="Digite algo" />
                <button className="comentButton">Comentar</button>
              </div>
            </div>
          </div>

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
              <h3 className="peapleAnnouncement-icon">
                {detailAnoucements?.advertiser?.name[0]}
              </h3>
              <h2>{detailAnoucements?.advertiser?.name}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur magni, officia voluptates accusantium cumque laudantium
                atque facilis mollitia tempora recusandae praesentium hic,
                veritatis nisi dolor vitae repellat magnam cum quidem?
              </p>
              <button
                className="peapleAnnouncement-button"
                onClick={() => {
                  navigate("/profile");
                  getAllAnnouncementByAdvertiser(
                    detailAnoucements?.advertiser?.id
                  );
                }}
              >
                Ver todos anuncios
              </button>
            </div>
          </aside>
        </main>
      )}
    </Container>
  );
};
