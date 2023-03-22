import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";

export const getAllAnnouncementsService = async (): Promise<Announcement[]> => {
    const announcementRepository = AppDataSource.getRepository(Announcement);

    return instanceToInstance(await announcementRepository.find({
        relations: {
            vehicle: {       
                galleryImages: true,
            },
            advertiser: true,
            comments: {
                // body: true,  
                user: true,
            },
        }
    }));
}