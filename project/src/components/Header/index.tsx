import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/Motors shop.png";
import { UserContext } from "../../context/user/userContext";
import MenuMobile from "../MenuMobile";
import { Container } from "./style";

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
