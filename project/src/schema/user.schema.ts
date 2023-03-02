import * as yup from 'yup'

export const userSessionRequestSchema = yup.object({
    email: yup
        .string()
        .required('Digite seu email')
        .email("Formato de email inválido")
        .matches(/^(?!.*@[^,]*,)/),
        
    password: yup
        .string()
        .required('Digite sua senha')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "Deve conter ao menos 1 número")
        .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
        .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
})