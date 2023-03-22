import AppDataSource from "../../data-source";
import { Announcement, GalleryImage } from "../../entities";
import { AppError } from "../../errors";

export const deleteAnnouncementService = async (id: string): Promise<object> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const galleryImageRepository = AppDataSource.getRepository(GalleryImage);

  const findAnnouncement = await announcementRepository.findOne({ 
    where: {
      id
    },
    relations: {
      vehicle: true
    }
  });

  await galleryImageRepository
    .createQueryBuilder()
    .delete()
    .where("vehicleId = :vehicleId", { vehicleId: findAnnouncement?.vehicle.id })
    .execute();
    
  if (!findAnnouncement) {
    throw new AppError(404, "Announcement not found");
  }

  await announcementRepository.delete(id);

  return {message: "Announcement deleted"};
};
