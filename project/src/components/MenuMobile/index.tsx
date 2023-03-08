import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../context/session/auth";
import { UserContext } from "../../context/user/userContext";
import { Button } from "../Button";
import InitialLetterName from "../InitialLetterName";
import { Container, Dropdown, DropdownContent } from "./style";

const MenuMobile = () => {
  const {
    user,
    menuOpen,
    setMenuOpen,
    setIsDropDown,
    isDropdown,
    isModalUpdateAddress,
    isModalUpdateProfile,
    setIsModalUpdateAddress,
    setIsModalUpdateProfile,
  } = UserContext();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="options">
        <Button
          className="btn-link"
          id="cars"
          as="a"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Carros
        </Button>

        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          id="motorcycles"
          className="btn-link"
          as="a"
        >
          Motos
        </Button>

        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          id="rent"
          className="btn-link"
          as="a"
        >
          Leilão
        </Button>
      </div>
      <div className="loginOptions">
        {user.id ? (
          <div className="box-user" onClick={() => setIsDropDown(!isDropdown)}>
            <InitialLetterName name={user.name && user.name[0]} />

            <Button
              onClick={() => {
                setIsDropDown(!isDropdown);
              }}
              className="btn-user"
            >
              {user.name}
            </Button>
            {isDropdown && (
              <Dropdown>
                <DropdownContent>
                  <Button
                    onClick={() => {
                      setIsModalUpdateProfile(!isModalUpdateProfile);
                      setIsDropDown(!isDropdown);
                      setMenuOpen(!menuOpen);
                    }}
                  >
                    Editar Perfil
                  </Button>
                  <Button
                    onClick={() => {
                      setIsModalUpdateAddress(!isModalUpdateAddress);
                      setIsDropDown(!isDropdown);
                      setMenuOpen(!menuOpen);
                    }}
                  >
                    Editar Endereço
                  </Button>
                  {user.isAdvertiser && (
                    <Button
                      onClick={() => {
                        setIsDropDown(!isDropdown);
                        setMenuOpen(!menuOpen);
                        navigate("/profile/admin");
                      }}
                    >
                      Meus Anúncios
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      logout();
                      setMenuOpen(!menuOpen);
                      setIsDropDown(!isDropdown);
                      location.reload();
                    }}
                  >
                    Sair
                  </Button>
                </DropdownContent>
              </Dropdown>
            )}
          </div>
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
        )}

        {/* {auth ? (
          <div> Nome</div>
        ) : (
          <div className="loginOpitonsAuth">
            Fazer login <button>Cadastrar</button>
          </div>
        )} */}
      </div>
    </Container>
  );
};

export default MenuMobile;
