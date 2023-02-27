import { VehicleUpdate } from "../../interfaces/announcement.interface";
import AppDataSource from "../../data-source";
import { GalleryImage, Vehicle } from "../../entities";
import { AppError } from "../../errors";
import { In } from "typeorm";

export const updateVehicleService = async (
  data: VehicleUpdate,
  id: string
): Promise<Vehicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const galleryImageRepository = AppDataSource.getRepository(GalleryImage);

  const findVehicle = await vehicleRepository.findOne({ 
    where: {
      id
    },relations: {
      galleryImages: true
    }
   });

  if (!findVehicle) {
    throw new AppError(404, "Vehicle not found");
  }

   await galleryImageRepository
    .createQueryBuilder()
    .delete()
    .where("vehicleId = :vehicleId", { vehicleId: id })
    .execute();

  const gallery = await galleryImageRepository
    .createQueryBuilder()
    .insert()
    .values(data.galleryImages!)
    .returning('*')
    .execute()
    


  await vehicleRepository.update(id, {
    type: data.type ? data.type : findVehicle.type, 
    coverImage: data.coverImage ? data.coverImage : findVehicle.coverImage,
      mileage: data.mileage ? data.mileage : findVehicle.mileage,
      price: data.price ? data.price : findVehicle.price,
      year: data.year ? data.year : findVehicle.year
  });


  await vehicleRepository
    .createQueryBuilder()
    .relation('galleryImages')
    .of(findVehicle)
    .add(gallery.raw)

  const updatedVehicle = await vehicleRepository.findOne({ 
    where: {
      id 
    }, 
    relations: {
      galleryImages: true
    }
  });

  return updatedVehicle!;
};
