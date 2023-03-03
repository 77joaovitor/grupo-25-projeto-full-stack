import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcement/create.service";

export const createAnnouncementController = async (req: Request, res: Response) => {
    const id = req.user.sub
    const newUser = await createAnnouncementService(req.body, id);
    
    return res.status(201).json(newUser);
};
