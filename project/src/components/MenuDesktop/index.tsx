import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import { Container, Dropdown, DropdownContent } from "./style";
import { Button } from "../Button";
import { getToken, logout } from "../../context/session/auth";
import { useNavigate } from "react-router-dom";
import InitialLetterName from "../InitialLetterName";
import { AnimatePresence, motion, Variants } from "framer-motion";

const MenuDesktop = () => {
  const {
    user,
    isDropdown,
    setIsDropDown,
    isModalUpdateProfile,
    setIsModalUpdateProfile,
    setIsModalUpdateAddress,
    isModalUpdateAddress,
    setAuth,
    setReload,
    reload
  } = UserContext();

  const navigate = useNavigate();
  const token = getToken();
  const variants: Variants = {
    open: {
      // clipPath: "inset(0% 0% 0% 0% round 10px)",
      scale: 1,
      y: 20,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    
    closed: {
      // clipPath: "inset(10% 50% 90% 50% round 10px)",
      scale: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    
  }
  const item = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  }
  return (
    <AnimatePresence>
      
      <Container>
        <div className="options">
          <Button className="btn-link" id="cars" as="a">
            Carros
          </Button>
          <Button id="motorcycles" className="btn-link" as="a">
            Motos
          </Button>
          <Button id="rent" className="btn-link" as="a">
            Leilão
          </Button>
        </div>
        <div
        
        className="loginOptions">
          {
            user.id ? (
              <motion.div
                className="box-user"
                onClick={() => setIsDropDown(!isDropdown)}
              >
                <InitialLetterName name={user.name && user.name[0]} />

                <Button
                  onClick={() => setIsDropDown(!isDropdown)}
                  className="btn-user"
                >
                  {user.name}
                </Button>
                {isDropdown && (
                  <Dropdown
                  initial="closed"
                  animate="open"
                  exit={{
                    scale: 0.5,
                    transition: { 
                        type: "spring", 
                        stiffness: 30,
                    }
                  }}
                  variants={variants}
                    
                  >
                    <DropdownContent >
                      <Button
                        onClick={() => {
                          setIsModalUpdateProfile(!isModalUpdateProfile);
                          setIsDropDown(!isDropdown);
                        }}
                        variants={item}
                      >
                        Editar Perfil
                      </Button>
                      <Button
                        onClick={() =>
                          setIsModalUpdateAddress(!isModalUpdateAddress)
                        }
                        variants={item}
                      >
                        Editar Endereço
                      </Button>
                      {user.isAdvertiser && (
                        <Button 
                        variants={item}
                        onClick={
                          () => {
                            navigate("/profile/admin")
                            setReload(!reload)
                          }
                        }>
                          Meus Anúncios
                        </Button>
                      )}
                      <Button
                      variants={item}
                        onClick={() => {
                          logout();
                          setIsDropDown(!isDropdown);
                          location.reload();
                        }}
                      >
                        Sair
                      </Button>
                    </DropdownContent>
                  </Dropdown>
                )}
              </motion.div>
            ) : (
              <>
                <Button
                  className="btn-link"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Fazer login
                </Button>
                <Button
                  className="btn-register"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Cadastrar
                </Button>
              </>
            )

            // <div className="loginOpitonsAuth">
          }
        </div>
      </Container>
    </AnimatePresence>
  );
};

export default MenuDesktop;
