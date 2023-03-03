import { Request, Response } from "express";
import { recoverPasswordService } from "../../services/user/recover.service";

export const recoverPasswordController = async (req: Request, res: Response) => {

    const message: object = await recoverPasswordService(req.body);

    return res.status(200).json(message)
}