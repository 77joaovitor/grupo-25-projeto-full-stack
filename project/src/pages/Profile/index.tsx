import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { AnnouncementContext } from "../../context";
import { UserContext } from "../../context/user/userContext";
import { AnnouncementResponse } from "../../interfaces/announcement.interface";
import { responsive } from "../../util/responsive";
import {
  BoxContent,
  ContainerList,
  ContainerMain,
  PresentationSection,
  ProfileContent,
  UserInformation,
} from "./style";

export const Profile = (): JSX.Element => {
  const { allAnnouncementByAdvertiser } = AnnouncementContext();

  const { userAdvertiser } = UserContext();

  const navigate = useNavigate();

  return (
    <>
      {userAdvertiser?.isAdvertiser ? (
        <>
          <Header />
          <PresentationSection id="home">
            <ProfileContent>
              <UserInformation>
                <span className="logoName">
                  {userAdvertiser.name && userAdvertiser?.name[0]}
                </span>{" "}
                <span>{userAdvertiser.name}</span>
              </UserInformation>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </ProfileContent>
          </PresentationSection>

          <ContainerMain>
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
                        isAdmPage={false}
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
                          isAdmPage={false}
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
