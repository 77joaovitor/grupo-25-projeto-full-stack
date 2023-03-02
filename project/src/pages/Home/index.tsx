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

export const Home = (): JSX.Element => {
  const {
    announcementsCars,
    announcementsMotorcycle,
    allAnnouncementByAdvertiser,
    allAnnouncements,
  } = AnnouncementContext();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Header />
      <PresentationSection>
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
            responsive={responsive2}
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
                    <ProductCard key={index} announcement={announcement} />
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
            {announcementsMotorcycle &&
              announcementsMotorcycle.map((announcement, index) => (
                <ProductCard key={index} announcement={announcement} />
              ))}
          </ContainerList>
        </BoxContent>
      </ListSection>
      <Footer />
    </>
  );
};
