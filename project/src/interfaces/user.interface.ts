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

export interface UserSessionRequest {
	email: string;
	password: string;
}