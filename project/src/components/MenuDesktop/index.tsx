import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import { Container } from "./style";

const MenuDesktop = () => {
  const { auth } = UserContext();
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
            <span>Fazer login</span> <button>Cadastrar</button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MenuDesktop;
