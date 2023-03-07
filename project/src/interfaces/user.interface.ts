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
	addresses?: {
		id: string
		zipCode: string
		city: string;
		state: string;
		road: string;
		number: string;
		complement: string;
		createdAt?: Date
		updatedAt?: Date
		deleteAt?: null
	}
}
export interface UserUpdateRequest {
	name?: string;
	email?: string;
	cpf?: string;
	phone?: string
	description?: string
	birthdate?: Date;
	isAdvertiser?: boolean;
	password?: string;
}
export interface UserRegisterRequest {
	name?: string;
	email?: string;
	cpf?: string;
	phone?: string
	description?: string
	birthdate?: Date;
	isAdvertiser?: boolean;
	password?: string;
	zipCode: string
	number: string;
	city: string;
	road: string;
	complement: string;
	state: string;
	confirmPassword: string
}

export interface AddressRequest {
	zipCode: string
	number: string;
	city: string;
	road: string;
	complement: string;
	state: string;
}

export interface UserSessionRequest {
	email: string;
	password: string;
}

