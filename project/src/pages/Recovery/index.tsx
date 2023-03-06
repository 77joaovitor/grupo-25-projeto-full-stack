import { Container } from "./style";
import { FieldValue, useForm } from "react-hook-form";
import { api } from "../../util/api";
import { Button } from "../../components/Button";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IEmailInput {
  email: string;
}

const RecoveryPageFunction = () => {
  const [modal, setModal] = useState(false);
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email inválido")
      .matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i, "Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
        "Senha obrigatória"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não identica"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const submitEmail = async (data: any) => {
    try {
      const response = await api.post("email", data);
      setModal(true);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };
  const submitPass = async (data: any) => {
    try {
      const { confirmPassword, email, pin, password, ...newData } = data;
      console.log({
        pin: parseInt(pin),
        password,
      });
      const response = await api.patch("/users/recover", {
        pin: parseInt(pin),
        password,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  if (modal) {
    return (
      <Container>
        <div>
          <h1>Recuperar senha</h1>
          <form onSubmit={handleSubmit(submitPass)}>
            <label>Codigo</label>
            <input type="text" {...register("pin")} />
            {errors.pin?.message as any}
            <label>Senha</label>
            <input type="text" {...register("password")} />
            {errors.password?.message as any}
            <label>Confirmar Senha</label>
            <input type="text" {...register("confirmPassword")} />
            {errors.confirmPassword?.message as any}
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div>
        <h1>Recuperar senha</h1>
        <form onSubmit={handleSubmit(submitEmail)}>
          <label>Digite seu email!</label>
          <input type="text" {...register("email")} />
          {errors.email?.message as any}
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </Container>
  );
};

const Recovery = () => {
  return <RecoveryPageFunction />;
};

export default Recovery;
