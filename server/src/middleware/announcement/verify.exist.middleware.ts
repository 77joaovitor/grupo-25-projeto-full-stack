import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";
import { AppError, handleError } from "../../errors";

export const verifyExistAnnouncement = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        const announcementRepository = AppDataSource.getRepository(Announcement);

        const findAnnouncement = await announcementRepository.findOneBy({ id });
      
        if (!findAnnouncement) {
          throw new AppError(404, "Announcement not found");
        }
        return next()
    } catch (error) {
        if(error instanceof AppError){

            handleError(error, res);

        };
    }
}