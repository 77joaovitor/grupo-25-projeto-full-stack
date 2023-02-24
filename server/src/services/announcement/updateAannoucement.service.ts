import { AnnoucementUpdate as AnnouncementUpdate } from "../../interfaces/announcement.interface";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";
import { AppError } from "../../errors";
import { updateVehicleService } from "../vehicle/updateVehicle.service";

export const updateAnnouncementService = async (
  data: AnnouncementUpdate,
  id: string
): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.findOneBy({ id });

  if (!findAnnouncement) {
    throw new AppError(404, "Announcement not found");
  }

  await announcementRepository.update(id, {
    title: data.title ? data.title : findAnnouncement.title,
    type: data.type ? data.type : findAnnouncement.type,
    description: data.description
      ? data.description
      : findAnnouncement.description,
    vehicle: await updateVehicleService(
      data.vehicle!,
      findAnnouncement.vehicle.id
    ),
  });

  const updatedAnnouncement = await announcementRepository.findOneBy({ id });

  return updatedAnnouncement!;
};
