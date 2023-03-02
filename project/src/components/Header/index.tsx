import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useMedia } from "react-use-media";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Motors shop.png";
import { UserContext } from "../../context/user/userContext";
import MenuDesktop from "../MenuDesktop";
import MenuMobile from "../MenuMobile";
import { Container } from "./style";

const Header = () => {
  const { auth } = UserContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const isWide = useMedia({
    minWidth: 700,
  });
  const navigate = useNavigate();
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {
        isWide &&
        <MenuDesktop />
      }
      {/* </div> */}
      <div className="menuMobile">
        {menuOpen ? (
          <GrClose size={16} onClick={() => setMenuOpen((old) => !old)} />
        ) : (
          <FiMenu size={26} onClick={() => setMenuOpen((old) => !old)} />
        )}
      </div>
      {menuOpen && (
        <div className="menuMobileHeader">
          <MenuMobile />
        </div>
      )}
    </Container>
  );
};

export default Header;
