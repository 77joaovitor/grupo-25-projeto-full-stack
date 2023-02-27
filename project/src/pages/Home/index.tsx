import { Ref, useRef } from "react";
import AuctionCard from "../../components/AuctionCard";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { AnnouncementContext } from "../../context";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import {
  PresentationSection,
  BoxButton,
  ContainerList,
  ListSection,
  BoxContent,
} from "./style";

export const Home = (): JSX.Element => {
  const { announcementsCars, announcementsMotorcycle } = AnnouncementContext();
  const carousel: any = useRef(null);
  const carousel2: any = useRef(null);
  const handleRightClick = (e: Event) => {
    e.preventDefault();
    carousel.current.scrollLeft += 267;
  };

  const handleLeftClick = (e: Event) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 275;
  };

  const handleRightClickM = (e: Event) => {
    e.preventDefault();
    carousel2.current.scrollLeft += 275;
  };

  const handleLeftClickM = (e: Event) => {
    e.preventDefault();
    carousel2.current.scrollLeft -= 275;
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
          <ContainerList>
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
            <AuctionCard />
          </ContainerList>
        </BoxContent>
      </ListSection>
      <ListSection>
        <BoxContent id="cars">
          <h3>Carros</h3>
          <ContainerList ref={carousel}>
            {announcementsCars &&
              announcementsCars.length > 0 &&
              announcementsCars.map((announcement, index) => (
                <ProductCard key={index} announcement={announcement} />
              ))}
          </ContainerList>
          <div className="divCarouselCar">
            <div onClick={(e) => handleLeftClick(e as any)}>
              <GrLinkPrevious />
            </div>
            <div onClick={(e) => handleRightClick(e as any)}>
              {" "}
              <GrLinkNext />
            </div>
          </div>
        </BoxContent>
        <BoxContent id="motorcycles">
          <h3>Motos</h3>
          <ContainerList ref={carousel2}>
            {announcementsMotorcycle &&
              announcementsMotorcycle.length > 0 &&
              announcementsMotorcycle.map((announcement, index) => (
                <ProductCard key={index} announcement={announcement} />
              ))}
          </ContainerList>
          <div className="divCarouselMoto">
            <div onClick={(e) => handleLeftClickM(e as any)}>
              <GrLinkPrevious />
            </div>
            <div onClick={(e) => handleRightClickM(e as any)}>
              <GrLinkNext />
            </div>
          </div>
        </BoxContent>
      </ListSection>
    </>
  );
};
