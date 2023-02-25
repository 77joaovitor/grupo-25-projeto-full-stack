import { Request, Response } from "express";
import { getOneUserService } from "../../services/user/getOne.service";

export const getOneUserController = async (req: Request, res: Response) => {
    const user = await getOneUserService(req.params.id);

    return res.status(200).json(user)
}