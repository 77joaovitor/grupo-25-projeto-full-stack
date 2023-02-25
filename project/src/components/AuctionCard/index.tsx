import { Container } from "./style";
import imgAuction from "../../assets/Image_leilão.jpeg"


const AuctionCard = () => {
  return( 
    <Container >
      <img src={imgAuction} alt="" />
    </Container>
  );
};

export default AuctionCard;
