import { Request, Response } from "express";
import { createSessionService } from "../../services/session/create.service";

export const createSessionController = async (req: Request, res: Response) => {
    const token: object = await createSessionService(req.body);

    return res.status(200).json(token);
}