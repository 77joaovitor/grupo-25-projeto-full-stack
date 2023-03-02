import { Container } from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../../components/Header'
import { InputRegister } from "../Input/Modal/inputRegister";
import { Button } from "../Button";
import { ButtonLink, ButtonType } from "../Button/Button/style";
import { UserRegisterRequest } from "../../interfaces/user.interface";
import { createContext, useContext } from "react";
import { Context } from "../../context/user/userContext";


const FormRegister = () => {

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido").matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,"Email inválido"),
    CPF: yup.string().required("CPF obrigatório"),
    phone: yup.string().required("Telefone obrigatório"),
    birthday: yup.string().required("Campo obrigatório obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    CEP: yup.string().required("CEP obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    complemento: yup.string(),
    city: yup.string().required("Cidade obrigatório"),
    rua: yup.string().required("Rua obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Senha obrigatória").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,"Senha obrigatória"),
    confirmPassword: yup.string().oneOf([yup.ref("password")],"Senha não identica")
})

const { createUser } = useContext(Context);

const { register,handleSubmit, formState: {errors} } = useForm<UserRegisterRequest>({
  resolver: yupResolver(formSchema),

}) 

  return <>
  <Header />
  <Container >
    
    <form onSubmit={handleSubmit(createUser)} action="">
      <div className="formText"> 
        <h2>Cadastro</h2>
        <span>Informações pessoais</span>
      </div>
  
      <InputRegister
          errors={errors}
          name="name"
          label="Nome"
          placeholder="Ex: Samuel Leão"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name="email"
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='CPF'
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='phone'
          label="Celular"
          placeholder="(DDD) 90000-0000"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='birthday'
          label="Data de nascimento"
          placeholder="00/00/00"
          type="text"
          register={register}
      />

<InputRegister
          errors={errors}
          name='description'
          label="Data de nascimento"
          placeholder="00/00/00"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='CEP'
          label="CEP"
          placeholder="00000.000"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='state'
          label="Estado"
          placeholder="Digitar Estado"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='city'
          label="Cidade"
          placeholder="Digitar cidade"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='rua'
          label="Rua"
          placeholder="Digitar rua"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='number'
          label="Número"
          placeholder="Digitar número"
          type="text"
          register={register}
      />

       <InputRegister
          errors={errors}
          name='complemento'
          label="Complemento"
          placeholder="Ex: apart 307"
          type="text"
          register={register}
      /> 

    <div className="formText"> 
      <span className="spanType">Tipo de conta</span>
      <div className="formButton">
        <button>
          Comprador
        </button>
        <button className="buttonWhite">
          Anunciante
        </button>
      </div>
      
    </div>

       <InputRegister
          errors={errors}
          name='password'
          label="Senha"
          placeholder="Digitar senha"
          type="text"
          register={register}
      />

      <InputRegister
          errors={errors}
          name='confirmPassword'
          label="Confirmar Senha"
          placeholder="Digitar senha"
          type="text"
          register={register}
      /> 
      <button className="buttonFinaly">
        Finalizar cadastro
      </button>
    </form>
  </Container>;
  </>
};

export default FormRegister;
