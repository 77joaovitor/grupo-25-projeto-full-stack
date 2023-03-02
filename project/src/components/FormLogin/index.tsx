import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SessionContext } from "../../context";
import { UserSessionRequest } from "../../interfaces/user.interface";
import { userSessionRequestSchema } from "../../schema/user.schema";
import { Button } from "../Button";
import { InputUserSession } from "../Input/Session/inputSession";
import { BoxForm } from "./style";

export const FormLogin = () => {

  const { createSession } = SessionContext()
  const { register, handleSubmit, formState: { errors } } = useForm<UserSessionRequest>({
    resolver: yupResolver(userSessionRequestSchema)
  });

  return (
    <BoxForm onSubmit={handleSubmit(createSession)}>
      <h2>Login</h2>

      <InputUserSession 
        register={register}
        errors={errors}
        label='Email'
        placeholder="Digitar email"
        name="email"
        key='mail'
        type="email"
      />

      <InputUserSession 
        register={register}
        errors={errors}
        label='Senha'
        placeholder="Digitar senha"
        name="password"
        key='password'
        type="password"
      />

      <Link to={"/recovery"}
        className='link-recovery'
      >
        Esqueci minha senha
      </Link>

      <Button
        type="submit"
      >
        Entrar
      </Button>

      <span>Ainda não possui conta?</span>

      <Link
        className="link-register"
        to="/register"
      >
        Cadastrar
      </Link>

    </BoxForm>
  )
};

