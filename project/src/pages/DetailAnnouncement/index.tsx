import { useNavigate } from "react-router-dom";
import car from "../../assets/car.png";
import { AnnouncementContext } from "../../context";
import { getToken } from "../../context/session/auth";
import { UserContext } from "../../context/user/userContext";
import { Container } from "./style";
import Header from "../../components/Header";
import InitialLetterName from "../../components/InitialLetterName";
import { Footer } from "../../components/Footer";
import { AnnouncementResponse } from "../../interfaces/announcement.interface";
import { api } from "../../util/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const DetailAnnouncement = () => {
  const [coments, setComents] = useState([]);

  const navigate = useNavigate();
  const { detailAnoucements, reload, getAllAnnouncementByAdvertiser } =
    AnnouncementContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (detailAnoucements === undefined) {
    }
    api
      .get(`/announcements/${detailAnoucements.id}/comments`)
      .then((res: any) => setComents(res.data))
      .catch((err) => console.log(err));
  }, []);

  const postComent = (data: any) => {
    api
      .post(`announcements/${detailAnoucements.id}/comments`, data)
      .then((res) =>
        setComents((oldComents): any => [res?.data, ...oldComents])
      )
      .catch((err) => console.log(err));
  };

  const { user } = UserContext();
  const token = getToken();
  return (
    <Container>
      <Header />
      <div className="container-main-detailAnnou"
        id="home"
      >
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
                      {
                        token
                          ? user.isAdvertiser
                            ? user.id === detailAnoucements.advertiser.id &&
                              getAllAnnouncementByAdvertiser(
                                detailAnoucements?.advertiser.id
                              )(navigate("/profile/admin"))
                            : navigate("/profile")
                          : navigate("/profile");
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
              <div className="coments">
                <h1>Comentários</h1>
                {coments &&
                  coments.map((elem: any, index) => (
                    <div key={index}>
                      <div className="coments-name">
                        <InitialLetterName name="JL" />
                        <h4>{elem?.user?.name}</h4>
                        <h5>{elem?.createdAt?.slice(0, 10)}</h5>
                      </div>
                      <p>{elem?.body as any}</p>
                    </div>
                  ))}
              </div>

              <div className="peapleComents">
                <div className="peapleComents-peap">
                  <InitialLetterName
                    name={detailAnoucements?.advertiser?.name[0]}
                  />
                  <h4>{detailAnoucements?.advertiser?.name}</h4>
                </div>
                <form className="input" onSubmit={handleSubmit(postComent)}>
                  <textarea placeholder="Digite algo" {...register("body")} />
                  <button className="comentButton" type="submit">
                    Comentar
                  </button>
                </form>
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
