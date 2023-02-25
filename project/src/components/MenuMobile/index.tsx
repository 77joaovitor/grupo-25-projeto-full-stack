import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import { Container } from "./style";

const MenuMobile = () => {
  const { auth } = useContext(UserContext);
  return (
    <Container>
      <div className="options">
        <button>Carros</button>
        <button>Motos</button>
        <button>Leilão</button>
      </div>
      <div className="loginOptions">
        {auth ? (
          <div> Nome</div>
        ) : (
          <div className="loginOpitonsAuth">
            Fazer login <button>Cadastrar</button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MenuMobile;
