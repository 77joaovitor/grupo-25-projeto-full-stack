export interface VehicleRequest {
    type: string;
    price: number;
    year: string;
    mileage: number;
    coverImage: string;
    galleryImage: [
        object
    ]
}

export interface AnnouncementRequest {
    type: string;
    title: string;
    description: string;
    vehicle: VehicleRequest;
}