import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";
import { AppError } from "../../errors";

export const deleteAnnouncementService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.findOneBy({ id });

  if (!findAnnouncement) {
    throw new AppError(404, "Announcement not found");
  }

  await announcementRepository.delete(id);
};
