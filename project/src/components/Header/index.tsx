import { Container } from "./style";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/Motors shop.png";
import MenuMobile from "../MenuMobile";

const Header = () => {
  const { auth } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
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
