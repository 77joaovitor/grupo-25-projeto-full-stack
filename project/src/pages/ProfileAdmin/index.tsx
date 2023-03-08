import { useNavigate } from "react-router-dom";
import AuctionCard from "../../components/AuctionCard";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import InitialLetterName from "../../components/InitialLetterName";
import { CreateAnnouncement } from "../../components/Modal/CreateAnnouncement";
import { ModalSuccessAnnouncement } from "../../components/Modal/CreateAnnouncement/alertSuccess";
import { DeleteAnnouncement } from "../../components/Modal/DeleteAnnouncement";
import { UpdateAnnouncement } from "../../components/Modal/UpdateAnnouncement";
import ProductCard from "../../components/ProductCard";
import { AnnouncementContext } from "../../context";
import { UserContext } from "../../context/user/userContext";
import { AnnouncementResponse } from "../../interfaces/announcement.interface";
import { responsive, responsive3 } from "../../util/responsive";
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
    setIsOpenModalCreateAnnouncement,
    isOpenModalCreateAnnouncement,
    allAnnouncementByAdvertiser,
  } = AnnouncementContext();

  const { user } = UserContext();
  const navigate = useNavigate();

  return (
    <>
      {<CreateAnnouncement />}
      {<UpdateAnnouncement />}
      {<DeleteAnnouncement />}
      {<ModalSuccessAnnouncement />}
      {user.isAdvertiser ? (
        <>
          <Header />
          <PresentationSection id="home">
            <ProfileContent>
              <UserInformation>
                <InitialLetterName
                  name={user.name[0]}
                  width={4}
                  heigth={4}
                  fontSize={4}
                />
                <span>{user.name}</span>
              </UserInformation>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>

              {user.isAdvertiser && (
                <Button
                  onClick={() =>
                    setIsOpenModalCreateAnnouncement(
                      !isOpenModalCreateAnnouncement
                    )
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
                <ContainerList
                  responsive={responsive3}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  <AuctionCard />
                  <AuctionCard />
                  <AuctionCard />
                  <AuctionCard />
                </ContainerList>
              </BoxContent>
            )}

            <BoxContent id="cars">
              <h3>Carros</h3>
              <ContainerList
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {allAnnouncementByAdvertiser &&
                  allAnnouncementByAdvertiser
                    .filter(
                      (elem: AnnouncementResponse) =>
                        elem.vehicle.type === "car"
                    )
                    .map((announcement, index) => (
                      <ProductCard
                        isAdmPage={true}
                        key={index}
                        announcement={announcement}
                      />
                    ))}
              </ContainerList>
            </BoxContent>
            <BoxContent id="motorcycles">
              <h3>Motos</h3>
              <ContainerList
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {allAnnouncementByAdvertiser &&
                  allAnnouncementByAdvertiser
                    .filter(
                      (elem: AnnouncementResponse) =>
                        elem.vehicle.type === "motorcycle"
                    )
                    .map(
                      (announcement: AnnouncementResponse, index: number) => (
                        <ProductCard
                          isAdmPage={true}
                          key={index}
                          announcement={announcement}
                        />
                      )
                    )}
              </ContainerList>
            </BoxContent>
          </ContainerMain>
          <Footer />
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};
