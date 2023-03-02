import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import { Container, Dropdown, DropdownContent } from "./style";
import { Button } from "../Button";
import { getToken, logout } from "../../context/session/auth";
import { useNavigate } from "react-router-dom";
import InitialLetterName from "../InitialLetterName";

const MenuDesktop = () => {
  const { user, isDropdown, setIsDropDown } = UserContext();
  const navigate = useNavigate()
  const token = getToken()
  if(user.name){

    console.log(  user.name.slice(0, 1));
  }

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
        {!token ? 
        
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
      </> : 
          <div 
            className="box-user"
          >
            <InitialLetterName
            name={user.name && user.name[0]}
            />
          
            <Button
              onClick={
                () => setIsDropDown(!isDropdown)
              }
              className="btn-user"
            >
              {user.name}
            </Button>
            {
              isDropdown &&
              <Dropdown>
                <DropdownContent>
                    <Button>
                      Editar Perfil
                    </Button>
                    <Button>
                      Editar Endereço
                    </Button>
                    {
                      user.isAdvertiser &&
                        <Button>
                          Meus Anúncios
                        </Button>
                    }
                    <Button
                      onClick={
                        () => {
                          logout()
                          navigate('/')
                        }
                      }
                    >
                      Sair
                    </Button>
                </DropdownContent>

              </Dropdown>
            }
          </div>
        
          // <div className="loginOpitonsAuth">
           
            
        }
      </div>
    </Container>
  );
};

export default MenuDesktop;
