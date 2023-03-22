export interface VehicleRequest {
  type: string;
  price: number;
  year: string;
  mileage: number;
  coverImage: string;
  galleryImages: [object];
}

export interface AnnouncementRequest {
  type: string;
  title: string;
  description: string;
  vehicle: VehicleRequest;
}

export interface AnnouncementUpdate {
  type?: string;
  title?: string;
  description?: string;
  vehicle?: VehicleUpdate;
  published: boolean;
}

export interface VehicleUpdate {
  coverImage?: string;
  galleryImages?: [object];
  price: number;
  year: string;
  mileage: number;
  type?: string;
}
