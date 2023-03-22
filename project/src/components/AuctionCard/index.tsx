import { Container } from "./style";
import imgAuction from "../../assets/Image_leilão.jpeg";
import imgAuctionDesktop from "../../assets/AuctionCardDesktop.png";

const AuctionCard = () => {
  return (
    <Container>
      <img className="img-mobile" src={imgAuction} alt="" />
      <img className="img-desktop" src={imgAuctionDesktop} alt="" />
    </Container>
  );
};

export default AuctionCard;
