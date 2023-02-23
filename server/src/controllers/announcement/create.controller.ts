import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcement/create.service";
import { createUserService } from "../../services/user/create.service";

export const createAnnouncementController = async (req: Request, res: Response) => {
    const newUser = await createAnnouncementService(req.body);
    
    return res.status(201).json(newUser);
};
