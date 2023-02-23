import * as yup from 'yup';

export const userRequestSchema =  yup.object().shape({
    name: yup.string()
        .required()
        .max(150, {message: 'Maximum number of characters is 150.'})
        .min(8, { message: 'Minimum number of characters is 8.' }),
    
    email: yup.string()
        .required()
        .email({ message: 'Put a valid email' }),
    
    password: yup.string()
        .required()
        .matches(/[A-Z]/, "Must contain at least 1 capital letter")
        .matches(/([a-z])/, "Must contain at least 1 lowercase letter")
        .matches(/(\d)/, "Must contain at least 1 number")
        .matches(/(\W)|_/, "Must contain at least 1 special character")
        .min(8, { message: "Must contain at least 8 digits" }),

    cpf: yup.string()
        .required()
        .max(11, { message: 'Maximum number of characters is 11.' }),

    phone: yup.string()
        .required()
        .max(16, { message: 'Maximum number of characters is 16.' }),

    description: yup.string()
        .required(),

    birthdate: yup.string()
        .required(),

    isAdvertiser: yup.boolean()
        .required(),
});

export const userSessionRequestSchema =  yup.object().shape({
    email: yup.string()
        .required()
        .email({ message: 'Put a valid email' }),
        
    password: yup.string()
        .required()
        .matches(/[A-Z]/, "Must contain at least 1 capital letter")
        .matches(/([a-z])/, "Must contain at least 1 lowercase letter")
        .matches(/(\d)/, "Must contain at least 1 number")
        .matches(/(\W)|_/, "Must contain at least 1 special character")
        .min(8, { message: "Must contain at least 8 digits" }),
});