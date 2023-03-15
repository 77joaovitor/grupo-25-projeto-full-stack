import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import * as yup from "yup";
import { SessionContext } from "../../context";
import { UserContext } from "../../context/user/userContext";
import { UserRegisterRequest } from "../../interfaces/user.interface";
import { userRegisterSchema } from "../../schema/user.schema";
import { Button } from "../Button";
import { InputRegister } from "../Input/Profile/inputRegister";
import { BoxButton, BoxInput, BoxType, Container } from "./style";
import { useState } from "react";

const FormRegister = () => {
  const { createProfile, setIsAdvertiser, isAdvertiser } = UserContext();

  const { showPassword, setShowPassword } = SessionContext();

  const [cepData, setCepData] = useState({})

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<UserRegisterRequest>({
    resolver: yupResolver(userRegisterSchema),
  });

  

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container onSubmit={handleSubmit(createProfile)} action="">
        <div className="formText">
          <h2>Cadastro</h2>
          <span>Informações pessoais</span>
        </div>

        <InputRegister
          errors={errors}
          name="name"
          label="Nome"
          placeholder="Ex: Geovane Oliveira"
          type="text"
          register={register}
        />

        <InputRegister
          errors={errors}
          name="email"
          label="Email"
          placeholder="Ex: geovane@gmail.com.br"
          type="text"
          register={register}
        />

        <InputRegister
          errors={errors}
          name="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          register={register}
        />

        <InputRegister
          errors={errors}
          name="phone"
          label="Celular"
          placeholder="(DDD) 9 0000-0000"
          type="text"
          register={register}
        />

        <InputRegister
          errors={errors}
          name="birthdate"
          label="Data de nascimento"
          placeholder="00/00/0000"
          type="text"
          register={register}
        />

        <InputRegister
          errors={errors}
          name="description"
          label="Descrição"
          placeholder="Digitar descrição"
          type="text"
          register={register}
          textarea={true}
        />

        <span>Informações de endereço</span>

        <InputRegister
          errors={errors}
          name="zipCode"
          label="CEP"
          placeholder="00000.000"
          cep={true}
          type="text"
          setValue={setValue}
          register={register}
        />

        <BoxInput>
          <InputRegister
            errors={errors}
            name="state"
            label="Estado"
            placeholder="Digitar Estado"
            type="text"
            register={register}
            />

          <InputRegister
            errors={errors}
            name="city"
            label="Cidade"
            placeholder="Digitar cidade"
            type="text"
            register={register}
            />
        </BoxInput>

        <InputRegister
          errors={errors}
          name="road"
          label="Rua"
          placeholder="Digitar rua"
          type="text"
          register={register}
        />

        <BoxInput>
          <InputRegister
            errors={errors}
            name="number"
            label="Número"
            placeholder="Digitar número"
            type="text"
              register={register}
          />

          <InputRegister
            errors={errors}
            name="complement"
            label="Complemento"
            placeholder="Ex: apart 307"
            type="text"
            register={register}
            />
        </BoxInput>

        <BoxType>
          <label className="spanType">Tipo de conta</label>
          <BoxButton>
            <Button
              onClick={() => {
                setIsAdvertiser(false);
              }}
              type="button"
              className={isAdvertiser ? "buttonWhite" : "buttonBlue"}
            >
              Comprador
            </Button>
            <Button
              onClick={() => {
                setIsAdvertiser(true);
              }}
              type="button"
              className={!isAdvertiser ? "buttonWhite" : "buttonBlue"}
            >
              Anunciante
            </Button>
          </BoxButton>
        </BoxType>

        <InputRegister
          errors={errors}
          name="password"
          label="Senha"
          placeholder="Digitar senha"
          type={showPassword ? "text" : "password"}
          register={register}
        />

        <span onClick={handleShowPassword} className="eye">
          {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
        </span>

        <InputRegister
          errors={errors}
          name="confirmPassword"
          label="Confirmar Senha"
          placeholder="Digitar senha"
          type={showPassword ? "text" : "password"}
          register={register}
        />

        <span onClick={handleShowPassword} className="eye-2">
          {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
        </span>

        <Button type="submit" className="buttonFinaly">
          Finalizar cadastro
        </Button>
      </Container>
    </>
  );
};

export default FormRegister;
