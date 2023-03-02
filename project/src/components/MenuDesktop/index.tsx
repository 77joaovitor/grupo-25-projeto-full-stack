import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import { Container, Dropdown, DropdownContent } from "./style";
import { Button } from "../Button";
import { getToken } from "../../context/session/auth";
import { useNavigate } from "react-router-dom";

const MenuDesktop = () => {
  const { user } = UserContext();
  const navigate = useNavigate()
  const token = getToken()

  return (
    <Container>
      <div className="options">
        <Button
         className="btn-link"
         id="car"
          as="a"
        >Carros</Button>
        <Button
        id="motorcycle"
         className="btn-link"
          as="a"
        >Motos</Button>
        <Button
        id="rent"
         className="btn-link"
        as="a"
        >Leilão</Button>
      </div>
      <div className="loginOptions">
        {token ? (
          <div 
            className="box-user"
          >
            <Button
              className="btn-user"
            >
              {user.name}
            </Button>
            
            <Dropdown>
              <DropdownContent>

              </DropdownContent>

            </Dropdown>
          </div>
        ) :
          // <div className="loginOpitonsAuth">
             <>
              <Button
                className="btn-link"
                onClick={() => {
                  navigate('/login')
                }}
              >
                Fazer login
              </Button> 
              <Button
              className="btn-register"
                onClick={() => {
                  navigate('/register')
                }}
              >
                Cadastrar
              </Button>
            </>
            
        }
      </div>
    </Container>
  );
};

export default MenuDesktop;
