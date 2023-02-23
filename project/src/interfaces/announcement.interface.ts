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
}

export interface AnnouncementRequest {
	type: string;
	title: string;
	description: string;
    vehicleType: string;
    price: number;
    year: string;
    mileage: number;
    coverImage: string;
    galleryImages: [
        {
            imageUrl: string;
        }
    ];
};