import { Container } from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../../components/Header'

const FormRegister = () => {

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido").matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,"Email inválido"),
    cpf: yup.string().required("CPF obrigatório"),
    phone: yup.string().required("Telefone obrigatório"),
    birthiday: yup.string().required("Campo obrigatório obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    cep: yup.string().required("CEP obrigatório"),
    country: yup.string().required("País obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatório"),
    bairro: yup.string().required("Bairro obrigatório"),
    rua: yup.string().required("Rua obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Senha obrigatória").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,"Senha obrigatória"),
    confirmPassword: yup.string().oneOf([yup.ref("password")],"Senha não identica")
})

const { register,handleSubmit, formState: {errors} } = useForm({
  resolver: yupResolver(formSchema),

}) 

  return <>
  
  <Container >
    <Header />
    <h2>Cadastro</h2>
    <span>Informações pessoais</span>
    <form onSubmit={handleSubmit()} action="">

      <label>
        <span>Nome</span>
        <input type="text" id="" placeholder="Ex: Samuel Leão" {...register("name")} />
        {errors.name?.message}
      </label>
      

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
  </>
};

export default FormRegister;
