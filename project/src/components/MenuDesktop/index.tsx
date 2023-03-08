import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import { Container, Dropdown, DropdownContent } from "./style";
import { Button } from "../Button";
import { getToken, logout } from "../../context/session/auth";
import { useNavigate } from "react-router-dom";
import InitialLetterName from "../InitialLetterName";

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
  } = UserContext();

  const navigate = useNavigate();
  const token = getToken();

  return (
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
      <div className="loginOptions">
        {
          user.id ? (
            <div
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
                <Dropdown>
                  <DropdownContent>
                    <Button
                      onClick={() => {
                        setIsModalUpdateProfile(!isModalUpdateProfile);
                        setIsDropDown(!isDropdown);
                      }}
                    >
                      Editar Perfil
                    </Button>
                    <Button
                      onClick={() =>
                        setIsModalUpdateAddress(!isModalUpdateAddress)
                      }
                    >
                      Editar Endereço
                    </Button>
                    {user.isAdvertiser && (
                      <Button onClick={() => navigate("/profile/admin")}>
                        Meus Anúncios
                      </Button>
                    )}
                    <Button
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
          )

          // <div className="loginOpitonsAuth">
        }
      </div>
    </Container>
  );
};

export default MenuDesktop;
