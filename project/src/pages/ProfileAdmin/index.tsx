import { useNavigate } from "react-router-dom";
import AuctionCard from "../../components/AuctionCard";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { CreateAnnouncement } from "../../components/Modal/CreateAnnouncement";
import { DeleteAnnouncement } from "../../components/Modal/DeleteAnnouncement";
import { UpdateAnnouncement } from "../../components/Modal/UpdateAnnouncement";
import ProductCard from "../../components/ProductCard";
import { AnnouncementContext } from "../../context";
import { UserContext } from "../../context/user/userContext";
import { AnnouncementResponse } from "../../interfaces/announcement.interface";
import {
  PresentationSection,
  ContainerMain,
  UserInformation,
  ProfileContent,
  ContainerList,
  BoxContent,
} from "./style";

export const ProfileAdmin = (): JSX.Element => {
  const {
    announcementsCars,
    setIsOpenModalCreateAnnouncement,
    announcementsMotorcycle,
    isOpenModalCreateAnnouncement,
    allAnnouncementByAdvertiser,
    setIsOpenModalUpdateAnnouncement,
    isOpenModalUpdateAnnouncement
  } = AnnouncementContext();
  const { user } = UserContext();
  const navigate = useNavigate();

  return (
    <>
      {<CreateAnnouncement />}
      {<UpdateAnnouncement />}
      {<DeleteAnnouncement />}

      {user.isAdvertiser ? 
        <>
          <Header />
          <PresentationSection id="home">
            <ProfileContent>
              <UserInformation>
                <span className="logoName">SL</span> <span>{"geovane"}</span>
              </UserInformation>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s
              </p>

              {user.isAdvertiser && (
                <Button
                  onClick={() =>
                    setIsOpenModalCreateAnnouncement(!isOpenModalCreateAnnouncement)
                  }

                >
                  Criar anuncio
                </Button>
              )}
            </ProfileContent>
          </PresentationSection>

          <ContainerMain>
            {user.isAdvertiser && (
              <BoxContent>
                <h3>Leilão</h3>
                <ContainerList>
                  <AuctionCard />
                  <AuctionCard />
                  <AuctionCard />
                  <AuctionCard />
                </ContainerList>
              </BoxContent>
            )}

            <BoxContent id="cars">
              <h3>Carros</h3>
              <ContainerList>
                {allAnnouncementByAdvertiser &&
                  allAnnouncementByAdvertiser
                    .filter(
                      (elem: AnnouncementResponse) => elem.vehicle.type === "car"
                    )
                    .map((announcement, index) => (
                      <ProductCard key={index} announcement={announcement} />
                    ))}
              </ContainerList>
            </BoxContent>
            <BoxContent id="motorcycles">
              <h3>Motos</h3>
              <ContainerList>
                {allAnnouncementByAdvertiser &&
                  allAnnouncementByAdvertiser
                    .filter(
                      (elem: AnnouncementResponse) =>
                        elem.vehicle.type === "motorcycle"
                    )
                    .map((announcement: AnnouncementResponse, index: number) => (
                      <ProductCard key={index} announcement={announcement} />
                    ))}
              </ContainerList>
            </BoxContent>
          </ContainerMain>
          <Footer />
        </> : navigate("/")
      }
    </>
  );
};
