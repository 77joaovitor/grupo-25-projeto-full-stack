import { Request, Response } from "express";
import { getAllAnnouncementsService } from "../../services/announcement/getAll.service";

export const getAllAnnouncementsController = async (req: Request, res: Response) => {
    const announcements = await getAllAnnouncementsService();
    
    return res.status(200).json(announcements);
};