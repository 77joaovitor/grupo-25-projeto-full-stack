import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";

export const getAllByAdvertiserService = async (advertiserId: string): Promise<Announcement[]> => {
    const announcementRepository = AppDataSource.getRepository(Announcement);
    console.log(advertiserId);
    
    return await announcementRepository
        .createQueryBuilder("announcements")
        .leftJoinAndSelect(
            "announcements.advertiser",
            "users",
            "announcements.advertiser = users.id"
        )
        .getMany()
}