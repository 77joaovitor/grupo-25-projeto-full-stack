import AuctionCard from "../../components/AuctionCard";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { AnnouncementContext } from "../../context";
import {
  PresentationSection,
  BoxButton,
  ContainerList,
  ListBox,
  ListSection,
  BoxContent,
} from "./style";
import { Footer } from "../../components/Footer";
import { AnnouncementResponse } from "../../interfaces/announcement.interface";
import { responsive, responsive3 } from "../../util/responsive";

export const Home = (): JSX.Element => {
  const { allAnnouncements } = AnnouncementContext();

  return (
    <>
      <Header />
      <PresentationSection id="home">
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

      <ListSection>
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
      </ListSection>
      <ListSection>
        <BoxContent id="cars">
          <ListBox>
            <h3>Carros</h3>
            <ContainerList
              responsive={responsive}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {allAnnouncements &&
                allAnnouncements
                  .filter(
                    (elem: AnnouncementResponse) => elem.vehicle.type === "car"
                  )
                  .map((announcement, index) => (
                    <ProductCard
                      isAdmPage={false}
                      key={index}
                      announcement={announcement}
                    />
                  ))}
            </ContainerList>
          </ListBox>
        </BoxContent>
        <BoxContent id="motorcycles">
          <h3>Motos</h3>
          <ContainerList
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {allAnnouncements &&
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
                ))}
          </ContainerList>
        </BoxContent>
      </ListSection>
      <Footer />
    </>
  );
};
