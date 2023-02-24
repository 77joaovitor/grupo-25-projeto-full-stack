import { AnnoucementUpdate } from "../../interfaces/announcement.interface";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";
import { AppError } from "../../errors";
import { updateVehicleService } from "../vehicle/updateVehicle.service";

export const updateAnnoucementService = async (
  data: AnnoucementUpdate,
  id: string
): Promise<Announcement> => {
  const annoucementRepository = AppDataSource.getRepository(Announcement);

  const findAnnoucement = await annoucementRepository.findOneBy({ id });

  if (!findAnnoucement) {
    throw new AppError(404, "Annoucement not found");
  }

  await annoucementRepository.update(id, {
    title: data.title ? data.title : findAnnoucement.title,
    type: data.type ? data.type : findAnnoucement.type,
    description: data.description
      ? data.description
      : findAnnoucement.description,
    vehicle: await updateVehicleService(
      data.vehicle!,
      findAnnoucement.vehicle.id
    ),
  });

  const updatedAnnoucement = await annoucementRepository.findOneBy({ id });

  return updatedAnnoucement!;
};
