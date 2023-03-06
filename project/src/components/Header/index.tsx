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
import { UpdateModalProfile } from "../Modal/UpdateProfile";
import { UpdateModalAddress } from "../Modal/UpdateAddress";
import Loading from "../Loading";

const Header = () => {
  const { menuOpen, setMenuOpen } = UserContext();

  const isWide = useMedia({
    minWidth: 700,
  });
  const navigate = useNavigate();
  return (
    <>
      {<UpdateModalProfile />}
      {<UpdateModalAddress />}
      {<Loading />}
      <Container>
        <figure className="logo"
          onClick={
            () => navigate('/')
          }
        >
          <img src={logo} alt="" />
        </figure>
        {
          isWide &&
          <MenuDesktop />
        }
        
        {
          !isWide &&

          <div className="menuMobile">
            {menuOpen ? (
              <GrClose size={16} onClick={() => setMenuOpen(!menuOpen)} />
            ) : (
              <FiMenu size={26} onClick={() => setMenuOpen(!menuOpen)} />
            )}
          </div>
        }
        {menuOpen && (
          <div className="menuMobileHeader">
            <MenuMobile />
          </div>
        )}

      </Container>
    </>
  );
};

export default Header;
