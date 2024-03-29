import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SessionContext } from "../../context";
import { UserSessionRequest } from "../../interfaces/user.interface";
import { userSessionRequestSchema } from "../../schema/user.schema";
import { Button } from "../Button";
import { InputUserSession } from "../Input/Session/inputSession";
import { BoxForm } from "./style";

export const FormLogin = () => {
  const { createSession, showPassword, setShowPassword } = SessionContext();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSessionRequest>({
    resolver: yupResolver(userSessionRequestSchema),
  });

  return (
    <BoxForm action="" onSubmit={handleSubmit(createSession)}>
      <h2>Login</h2>

      <InputUserSession
        register={register}
        errors={errors}
        label="Email"
        placeholder="Digitar email"
        name="email"
        key="mail"
        type="email"
      />

      <InputUserSession
        register={register}
        errors={errors}
        label="Senha"
        placeholder="Digitar senha"
        name="password"
        key="password"
        type={showPassword ? "text" : "password"}
      />
      <span onClick={handleShowPassword} className="eye">
        {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
      </span>

      <Link to={"/recovery"} className="link-recovery">
        Esqueci minha senha
      </Link>

      <Button type="submit">Entrar</Button>

      <span>Ainda não possui conta?</span>

      <Link className="link-register" to="/register">
        Cadastrar
      </Link>
    </BoxForm>
  );
};
