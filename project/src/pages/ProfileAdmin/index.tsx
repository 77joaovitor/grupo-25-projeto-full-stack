import { useLocation, useNavigate } from "react-router-dom";
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
import { Message } from "../Home/style";
import {
  BoxContent,  ContainerMain, PresentationSection, ProfileContent, UserInformation
} from "./style";
import { ContainerList } from "../Profile/style";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const ProfileAdmin = (): JSX.Element => {
  const {
    setIsOpenModalCreateAnnouncement,
    isOpenModalCreateAnnouncement,
    allAnnouncementByAdvertiserAdmin,
  } = AnnouncementContext();

  const { user, isDropdown, setIsDropDown } = UserContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {<CreateAnnouncement />}
      {<UpdateAnnouncement />}
      {<DeleteAnnouncement />}
      {<ModalSuccessAnnouncement />}
      {user.isAdvertiser && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <PresentationSection id="home">
            <ProfileContent>
              <InitialLetterName
                className="logoName"
                name={user.name[0]}
                width={4}
                heigth={4}
                fontSize={4}
              />
              <UserInformation>
                <div className="box-info-user">
                  <span>{user.name}</span>
                  <span className="span-advertiser">Anunciante</span>
                </div>
              </UserInformation>

              <p>
                {user?.description}
              </p>

              {user.isAdvertiser && (
                <Button
                  className="btn-create"
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

          <ContainerMain
              onClick={
                () => isDropdown && setIsDropDown(false)
              }
          >
            {user.isAdvertiser && (
              <BoxContent 
                className="box-1"
                id="rent"
              >
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
                infinite={true}
              
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {allAnnouncementByAdvertiserAdmin &&
                  allAnnouncementByAdvertiserAdmin
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
                {
                  allAnnouncementByAdvertiserAdmin
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
                // removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {allAnnouncementByAdvertiserAdmin &&
                  allAnnouncementByAdvertiserAdmin
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
                {
                  allAnnouncementByAdvertiserAdmin
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
