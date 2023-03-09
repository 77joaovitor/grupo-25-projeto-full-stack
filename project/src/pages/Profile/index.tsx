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
  Message,
  PresentationSection,
  ProfileContent,
  UserInformation,
} from "./style";

export const Profile = (): JSX.Element => {
  const { allAnnouncementByAdvertiser } = AnnouncementContext();

  const { userAdvertiser, isDropdown, setIsDropDown } = UserContext();

  const navigate = useNavigate();

  return (
    <>
      {userAdvertiser?.isAdvertiser ? (
        <>
          <Header />
          <PresentationSection id="home"
             onClick={
              () => isDropdown && setIsDropDown(false)
            }
          >
            <ProfileContent>
              <UserInformation>
                <span className="logoName">
                  {userAdvertiser.name && userAdvertiser?.name[0]}
                </span>{" "}
                <span>{userAdvertiser.name}</span>
              </UserInformation>

              <p>
               {userAdvertiser?.description}
              </p>
            </ProfileContent>
          </PresentationSection>

          <ContainerMain
             onClick={
              () => isDropdown && setIsDropDown(false)
            }
          >
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
                    {
                      allAnnouncementByAdvertiser
                      .filter(
                        (elem: AnnouncementResponse) =>
                          elem.vehicle.type === "car"
                      ).length === 0 && <Message>
                      <p>Anunciante sem anúncios disponíveis</p>
                  </Message> 
                    }
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
                      {
                      allAnnouncementByAdvertiser
                      .filter(
                        (elem: AnnouncementResponse) =>
                          elem.vehicle.type === "motorcycle"
                      ).length === 0 && <Message>
                      <p>Anunciante sem anúncios disponíveis</p>
                  </Message> 
                    }
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
