import { Request, Response } from "express";
import { getAllByAdvertiserService } from "../../services/announcement/getAllByAdvertiseService.service";

export const getAllByAdvertiserController = async (req: Request, res: Response) => {
    
    const announcements = await getAllByAdvertiserService(req.params.advertiserId)
    return res.status(200).json(announcements);
};