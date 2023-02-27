import { Container } from "./style";
const FormRegister = () => {
  return <Container>
    <h2>Cadastro</h2>
    <h1>TESTE</h1>
    <span>Informações pessoais</span>
    <form action="">
      <label>Nome</label>
      <input type="text" name="" id="" placeholder="Ex: Samuel Leão"/>

      <label>Email</label>
      <input type="text" name="" id="" placeholder="Ex: samuel@kenzie.com.br"/>

      <label>CPF</label>
      <input type="text" name="" id="" placeholder="000.000.000-00"/>

      <label>Celular</label>
      <input type="text" name="" id="" placeholder="(DDD) 90000-0000"/>

      <label>Data de nascimento</label>
      <input type="text" name="" id="" placeholder="00/00/00"/>

      <label>Descrição</label>
      <input type="text" name="" id="" placeholder="Digitar descrição"/>

      <span>Informações de  endereço</span>
      <label>CEP</label>
      <input type="text" name="" id="" placeholder="00000.000"/>
      
      <label>Estado</label>
      <input type="text" name="" id="" placeholder="Digitar Estado"/>

      <label>Cidade</label>
      <input type="text" name="" id="" placeholder="Digitar cidade"/>

      <label>Rua</label>
      <input type="text" name="" id="" placeholder="Digitar rua"/>

      <label>Número</label>
      <input type="text" name="" id="" placeholder="Digitar número"/>

      <label>Complemento</label>
      <input type="text" name="" id="" placeholder="Ex: apart 307"/>

      <span>Tipo de conta</span>
      <button type="button">Comprador</button>
      <button type="button">Anunciante</button>

      <label>Senha</label>
      <input type="password" name="" id="" placeholder="Digitar senha"/>

      <label>Confirmar Senha</label>
      <input type="password" name="" id="" placeholder="Digitar senha"/>
    </form>
  </Container>;
};

export default FormRegister;
