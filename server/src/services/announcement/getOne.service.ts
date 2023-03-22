import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";


export const getOneAnnouncementService = async (announcementId: string): Promise<Announcement> => {
    const announcementRepository = AppDataSource.getRepository(Announcement);
    
    const announcement = await announcementRepository
        .findOne({
            where: {
                id: announcementId,
                isActive: true
            },
            relations: {
                vehicle: {
                    galleryImages: true
                },
                advertiser: true,
                comments: true,
            }
        })

    return instanceToInstance(announcement!)
}