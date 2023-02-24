import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";

export const getAllByAdvertiserService = async (advertiserId: string): Promise<Announcement[]> => {
    const announcementRepository = AppDataSource.getRepository(Announcement);

    return await announcementRepository
        .createQueryBuilder()
        .where("announcements.advertiser = :id", {id: advertiserId})
        .getMany()
}