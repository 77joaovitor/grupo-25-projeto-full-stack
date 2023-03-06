import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/delete.service";

export const deleteUserController = async (req: Request, res: Response) => {

    const message = await deleteUserService(req.params.id);

    return res.status(200).json(message)

}