import { Request, Response } from "express";
import { getAllByAnnouncementService } from "../../services/comment/getAllByAnnouncement.service";

export const getAllByAnnouncementController = async (req: Request, res: Response) => {
    const paramsId = req.params.id;

    const comments = await getAllByAnnouncementService(paramsId);

    return res.status(200).json(comments);
}