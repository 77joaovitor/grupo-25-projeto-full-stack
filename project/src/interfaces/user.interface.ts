export interface UserResponse {
    id: string;
	name: string;
	email: string;
	cpf: string;
	phone: string
	description: string
	birthdate: Date;
	isAdvertiser: boolean;
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
	deleteAt: null | Date
}

export interface UserRegisterRequest{
	name: string;
	email: string;
	CPF: string;
	phone: string
	description: string
	birthday: Date;
	CEP:string
    state:string
    city:string
    rua:string
    number:string
	country:string
    complemento:string
    password:string
    confirmPassword:string
}