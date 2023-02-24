export interface VehicleRequest {
  type: string;
  price: number;
  year: string;
  mileage: number;
  coverImage: string;
  galleryImage: [object];
}

export interface AnnouncementRequest {
  type: string;
  title: string;
  description: string;
  vehicle: VehicleRequest;
}

export interface AnnoucementUpdate {
  type?: string;
  title?: string;
  description?: string;
  vehicle?: VehicleUpdate;
}

export interface VehicleUpdate {
  coverImage?: string;
  galleryImages?: [object];
}
