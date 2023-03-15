import { useEffect } from "react";
import AuctionCard from "../../components/AuctionCard";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { AnnouncementContext } from "../../context";
import { UserContext } from "../../context/user/userContext";
import { AnnouncementResponse } from "../../interfaces/announcement.interface";
import { responsive, responsive3 } from "../../util/responsive";
import {
  BoxButton, BoxContent, ContainerList, ListSection, Message, PresentationSection
} from "./style";

export const Home = (): JSX.Element => {
  const { allAnnouncements } = AnnouncementContext();
  const { setIsDropDown, isDropdown, } = UserContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <PresentationSection id="home"
        onClick={
          () => isDropdown && setIsDropDown(false)
        }
      >
        <p>Velocidade e experiência em um lugar feito para você</p>
        <span>Um ambiente feito para você explorar o seu melhor</span>

        <BoxButton>
          <Button as="a" id="cars">
            Carros
          </Button>
          <Button as="a" id="motorcycles">
            Motos
          </Button>
        </BoxButton>
      </PresentationSection>

      <ListSection
        onClick={
          () => isDropdown && setIsDropDown(false)
        }
      >
        <BoxContent className="box-1" id="rent">
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
      </ListSection>

      <ListSection
        onClick={
          () => isDropdown && setIsDropDown(false)
        }
      >
        <BoxContent id="cars">
          {/* <ListBox> */}
          <h3>Carros</h3>
          <ContainerList
            responsive={responsive}
            infinite={true}
          
            removeArrowOnDeviceType={["tablet", "mobile"]}
            
          >
            {allAnnouncements &&
              allAnnouncements
                .filter(
                  (elem: AnnouncementResponse) =>
                    elem.vehicle.type === "car"
                )
                .map((announcement, index) => (
                  <ProductCard
                    isAdmPage={false}
                    key={announcement.id}
                    announcement={announcement}
                  />
                ))
            }
            {
              allAnnouncements
                .filter(
                  (elem: AnnouncementResponse) => elem.vehicle.type === "car"
                ).length === 0 &&
              <Message className="message">
                <p>Anunciante sem anúncios disponíveis</p>
              </Message>

            }
          </ContainerList>
        </BoxContent>

        <BoxContent id="motorcycles"
          onClick={
            () => isDropdown && setIsDropDown(false)
          }
        >
          <h3>Motos</h3>
          <ContainerList
            responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {
              allAnnouncements.length > 0 &&
              allAnnouncements
                .filter(
                  (elem: AnnouncementResponse) =>
                    elem.vehicle.type === "motorcycle"
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
              allAnnouncements
                .filter(
                  (elem: AnnouncementResponse) =>
                    elem.vehicle.type === "motorcycle"
                ).length === 0 && <Message>
                <p>Anunciante sem anúncios disponíveis</p>
              </Message>

            }
          </ContainerList>
        </BoxContent>
      </ListSection>
      <Footer />
    </>
  );
};
