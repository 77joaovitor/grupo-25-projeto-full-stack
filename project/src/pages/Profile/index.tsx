import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import InitialLetterName from "../../components/InitialLetterName";
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
  const { allAnnouncementByAdvertiser, reload, setReload } = AnnouncementContext();
  
  const { userAdvertiser, isDropdown, setIsDropDown } = UserContext();
  const { pathname } = useLocation()


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {userAdvertiser?.isAdvertiser && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
  
        >
          <Header />
          <PresentationSection id="home"
             onClick={
              () => isDropdown && setIsDropDown(false)
            }
          >
            <ProfileContent id="home">
              <InitialLetterName
                className="logoName"
                name={userAdvertiser.name[0]}
                width={4}
                heigth={4}
                fontSize={4}
              />
              <UserInformation>
                <div className="box-info-user">
                  <span>{userAdvertiser.name}</span>
                  <span className="span-advertiser">Anunciante</span>
                </div>
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
                infinite={true}
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
                    ))
                }
                {
                  allAnnouncementByAdvertiser
                  .filter(
                    (elem: AnnouncementResponse) =>
                      elem.vehicle.type === "car"
                  ).length === 0 &&
                  <Message>
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
        </motion.div>
      )}
    </>
  );
};
