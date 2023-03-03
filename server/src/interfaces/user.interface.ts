interface Address {
    zipCode: string;
    state: string;
    city: string;
    road: string;
    number: string;
    complement?: string;
}

export interface UserRequest {
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: string;
    description: string;
    birthdate: string;
    isAdvertiser: boolean;
    address: Address;
}

export interface UserSessionRequest {
    email: string
    password: string
}

export interface UserRecoveryPasswordRequest {
    password: string;
    pin: number;
}