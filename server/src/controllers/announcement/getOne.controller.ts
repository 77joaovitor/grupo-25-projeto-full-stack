import { Request, Response } from "express";
import { Announcement } from "../../entities";
import { getOneAnnouncementService } from "../../services/announcement/getOne.service";

export const getOneAnnouncementController = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const announcement: Announcement = await getOneAnnouncementService(id);
    return res.status(200).json(announcement)
}