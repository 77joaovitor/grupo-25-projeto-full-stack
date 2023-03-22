interface Vehicle {
    id: string;
    type: string;
    price: number;
    year: Date;
    mileage: number;
    coverImage: string;
    createdAt: Date;
    updatedAt: Date;
    deleteAt?: null;
    galleryImages: [
        {
            id: string;
            imageUrl: string;
            createdAt: Date;
            deleteAt?: null;
        }
    ]
}

export interface UserComment {
    id: string
    name: string
    email: string
    cpf: string
    phone: string
    description: string
    birthdate: string
    isAdvertiser: boolean;
    isActive: boolean;
    pin: string,
    createdAt: Date;
    updatedAt: Date;
    deleteAt: null
}

export interface RequestComment {
    body: string
}

interface Advertiser {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    description: string;
    birthdate: Date;
    isAdvertiser: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deleteAt?: null;
}

export interface Comment {
    id: string;
    body: string
    createdAt: string
    user: UserComment;
}

export interface AnnouncementResponse {
	id: string;
	type: string;
	title: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	deleteAt?: null,
	vehicle: Vehicle;
	advertiser: Advertiser;
    isActive: boolean;
    comments?: Comment[]
}

type FormValues = {
    galleryImages: {
        imageUrl: string;
    }[];
  };

export interface AnnouncementRequest {
	type: string;
	title: string;
	description: string;
    vehicleType: string;
    price: number;
    year: string;
    mileage: number;
    coverImage: string;
    galleryImages:  {
        imageUrl: string;
    }[];
};
export interface UpdateAnnouncementRequest {
	type: string;
	title: string;
	description: string;
    vehicleType: string;
    price: number;
    year: string;
    mileage: number;
    coverImage: string;
    galleryImages:  {
        imageUrl: string;
    }[];
    isActive: boolean;
};