import * as yup from "yup";

export const userSessionRequestSchema = yup.object({
  email: yup.string().required("Digite seu email"),

  password: yup.string().required("Digite sua senha"),
});

export const userRegisterSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("Digite seu email")
    .email("Formato de email inválido")
    .matches(/^(?!.*@[^,]*,)/),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .max(14, "Coloque no máximo 14 caracteres"),
  phone: yup
    .string()
    .required("Telefone obrigatório"),
  birthdate: yup
    .string()
    .required("Campo obrigatório obrigatório"),
  description: yup
    .string()
    .required("Campo obrigatório"),
  zipCode: yup
    .string()
    .required("CEP obrigatório"),
  state: yup
    .string()
    .required("Estado obrigatório"),
  city: yup
    .string()
    .required("Cidade obrigatório"),
  road: yup
    .string()
    .required("Rua obrigatório"),
  number: yup
    .string()
    .required("Campo obrigatório"),
  password: yup
    .string()
    .required('Digite sua senha')
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não identica")
  })

export const userUpdateSchema = yup.object({
  name: yup
    .string()
    .notRequired(),
  email: yup
    .string()
    .notRequired()
    .email("Formato de email inválido")
    .matches(/^(?!.*@[^,]*,)/),
  description: yup.string().notRequired(),
});

export const recoverySchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido"),
});

export const recoveryPasswordSchema = yup.object().shape({
  pin: yup
    .number()
    .required("Código obrigatório"),
  password: yup .string()
    .required('Digite sua nova senha')
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senha não identica"),
});