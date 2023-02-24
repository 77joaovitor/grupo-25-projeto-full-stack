import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";

export const getAllAnnouncementsService = async (): Promise<Announcement[]> => {
    const announcementRepository = AppDataSource.getRepository(Announcement);

    return await announcementRepository.find({
        relations: {
            vehicle: {       
                galleryImages: true,
            },
            advertiser: true
        }
    });
}