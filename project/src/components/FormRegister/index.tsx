import { Container } from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../../components/Header'
import { InputModalAnnouncement } from "../Input/Modal/inputCreateAnnouncement";
import { Button } from "../Button";
import { ButtonLink, ButtonType } from "../Button/Button/style";

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
const onSubmitFunction = (data:any) => {
  console.log(data)
  // if(user){
  //     Setuser([...user,data])
  //     history.push(`/userpage/ ${data.name}`)
  // }
}

  return <>
  <Header />
  <Container >
    
    <form onSubmit={handleSubmit(onSubmitFunction)} action="">
      <div className="formText"> 
        <h2>Cadastro</h2>
        <span>Informações pessoais</span>
      </div>
   
      
      {/* <label>
        <span>Nome</span>
        <input type="text" id="" placeholder="Ex: Samuel Leão" {...register("name")} />
        {errors.name?.message}
      </label> */}
      
      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Nome"
          placeholder="Ex: Samuel Leão"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Celular"
          placeholder="(DDD) 90000-0000"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Data de nascimento"
          placeholder="00/00/00"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="CEP"
          placeholder="00000.000"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Estado"
          placeholder="Digitar Estado"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Cidade"
          placeholder="Digitar cidade"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Rua"
          placeholder="Digitar rua"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Número"
          placeholder="Digitar número"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
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

      <InputModalAnnouncement
          errors={errors}
          name='title'
          label="Senha"
          placeholder="Digitar senha"
          type="text"
          register={register}
      />

      <InputModalAnnouncement
          errors={errors}
          name='title'
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
