import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";
import { AppError, handleError } from "../../errors";

export const verifyAnnouncementOwner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const advertiserId = req.user.sub;
        
        const announcementRepository = AppDataSource.getRepository(Announcement);
        
        const findAnnouncement = await announcementRepository.findOne({ 
            where: {
                id
            },
            relations: {
                advertiser: true
            }
         });
                 
        if(findAnnouncement?.advertiser.id !== advertiserId){ throw new AppError(401, "User Unauthorized") };

        return next();
        
    } catch (error) {
        if(error instanceof AppError){

            handleError(error, res);

        };
    }
}