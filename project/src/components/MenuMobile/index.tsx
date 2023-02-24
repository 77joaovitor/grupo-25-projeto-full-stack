import { Container } from "./style";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

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
