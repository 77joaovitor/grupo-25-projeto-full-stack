import AppDataSource from "../../data-source";
import { GalleryImage, Vehicle } from "../../entities";
import { AnnouncementRequest, VehicleRequest } from "../../interfaces/announcement.interface";

export const createVehicleService = async (vehicle: VehicleRequest): Promise<Vehicle> => {

    const vehicleRepository = AppDataSource.getRepository(Vehicle);
    const galleryImageRepository = AppDataSource.getRepository(GalleryImage);

    const gallery = await galleryImageRepository.createQueryBuilder()
        .insert()
        .values(vehicle.galleryImage)
        .returning('*')
        .execute()
    
    const newVehicle = vehicleRepository.create( {
        coverImage: vehicle.coverImage,
        mileage: vehicle.mileage,
        price: vehicle.price,
        type: vehicle.type,
        year: vehicle.year,
        galleryImages: gallery.raw
    });

    await vehicleRepository.save(newVehicle);

    return newVehicle
}