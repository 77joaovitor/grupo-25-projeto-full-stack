import { VehicleUpdate } from "../../interfaces/announcement.interface";
import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities";
import { AppError } from "../../errors";

export const updateVehicleService = async (
  data: VehicleUpdate,
  id: string
): Promise<Vehicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const findVehicle = await vehicleRepository.findOneBy({ id });

  if (!findVehicle) {
    throw new AppError(404, "Vehicle not found");
  }

  await vehicleRepository.update(id, {
    coverImage: data.coverImage ? data.coverImage : findVehicle.coverImage,
    galleryImages: data.galleryImages
      ? data.galleryImages
      : findVehicle.galleryImages,
      mileage: data.mileage ? data.mileage : findVehicle.mileage,
      price: data.price ? data.price : findVehicle.price,
      year: data.year ? data.year : findVehicle.year
  });

  const updatedVehicle = await vehicleRepository.findOneBy({ id });

  return updatedVehicle!;
};
